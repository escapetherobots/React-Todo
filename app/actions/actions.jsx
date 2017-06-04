import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';
//================================

//===============================================
export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};

//===============================================
//===============================================
// Add todo
export var addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	};	
};


//Start AddTodo - Firebase
export var startAddTodo = (text) => {
	return (dispatch, getState) => {
		// define the todo object defaults
		var todo = {
			text,
			completed: false,
			createdAt: moment().unix(),
			completedAt: null
		};
		// set reference for firebase item
		var todoRef = firebaseRef.child('todos').push(todo);

		//return firebase promise and call the dispatch on updated object with returned id
		return todoRef.then( (snapshot) => {
			var todoResult = {
				...todo,
				id: todoRef.key
			};
			//now run the actual dispatched reducer passing in the todo object
			dispatch(addTodo(todoResult));
		});
	};
};

//===============================================
//===============================================
//Add Array of Todos
export var addTodos = (todos) => {
	// this is an array of objects
	return {
		type: 'ADD_TODOS',
		todos
	}
};


// Pre-action ADDTODOS
export var startAddTodos = () => {
	return (dispatch, getState) => {
		var todosRef = firebaseRef.child('todos');

		return todosRef.once('value').then( (snapshot) => {
				// console.log('add from firebase snapshot: ', snapshot.val(), snapshot.key);
				var todosObj = {
					...snapshot.val()
				}

				var todosKeyArr = Object.keys(todosObj);
				
				var todosArr = todosKeyArr.map( (key) => {
					return {
						...todosObj[key],
						id: key
					};
				})
				
				dispatch(addTodos(todosArr));
			}
		);
	};

};


//===============================================
//===============================================
export var toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED',
	};

};

//===============================================
//===============================================
export var updateTodo = (id, updates) => {
	return {
		type: 'UPDATE_TODO',
		id,
		updates
	};
};


//Start toggleTODO - firebase
// THUNK lets us return functions

export var startToggleTodo = (id, completed) => {
	return (dispatch, getState) => {
		//args are functions
		var todoRef = firebaseRef.child(`todos/${id}`);
		var updates = {
			completed,
			completedAt: completed ? moment().unix() : null
		};

		return todoRef.update(updates).then( () => {
			dispatch(updateTodo(id, updates));
		});
		
	};
};


//===============================================
//===============================================
export var clearTodo = (id) => {
	console.log('running clear todo with: ', id);
	return {
		type: 'CLEAR_TODO',
		id
	};
};


// THUNK lets actions return functions
export var startClearTodo = (id) => {
	console.log('starting clear');
	return (dispatch, getState) => {
		var todoRef = firebaseRef.child(`todos/${id}`);

		return todoRef.remove().then( () => {
			dispatch(clearTodo(id));
		});
	};
};

