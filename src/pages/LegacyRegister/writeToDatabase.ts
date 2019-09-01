import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const writeToDatabase = (registration: any, students: any, loggedIn: boolean) => {
	let allData = { ...registration, ...students };

	if (!loggedIn) {
		let firebaseRef = firebase.database().ref('anonymousUsers');
		return firebaseRef.push(allData);
	} else {
		let currUser = firebase.auth().currentUser;
		if (!currUser) {
			throw new Error('invalid user');
		}
		let firebaseRef = firebase.database().ref(`users/${currUser.uid}/registrationData`);
		return firebaseRef.set(allData);
	}
}

export default writeToDatabase;