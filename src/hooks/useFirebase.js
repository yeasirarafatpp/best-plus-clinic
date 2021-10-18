import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initFirebaseApp from "../Firebase/firebase.init";

initFirebaseApp();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => setUsers(result.user))
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            })
    };
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUsers({});
            });
    };
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(users)
            }
        });
    }, []);
    return {
        users,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;