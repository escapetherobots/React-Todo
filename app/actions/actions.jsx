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
	return {
		type: 'ADD_TODOS',
		todos
	}
}



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

//===============================================
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
	return {
		type: 'CLEAR_TODO',
		id
	};
};