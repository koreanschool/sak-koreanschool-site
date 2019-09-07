import { useState, useEffect } from "react";

import firebase from 'firebase/app';
import 'firebase/auth';

export default function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        return firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setUser({
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email
                });
            } else {
                setUser(null);
            }
        });
    });

    return {user};
}

