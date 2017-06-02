import firebase from 'firebase';

try {
	var config = {
	    apiKey: "AIzaSyCYKLvglqBvv9OG8jALqgrMknCNypZxba4",
	    authDomain: "crux-react-todo.firebaseapp.com",
	    databaseURL: "https://crux-react-todo.firebaseio.com",
	    projectId: "crux-react-todo",
	    storageBucket: "crux-react-todo.appspot.com",
	    messagingSenderId: "687286328698"
	};

	firebase.initializeApp(config);

} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;