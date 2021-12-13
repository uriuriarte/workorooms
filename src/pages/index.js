import React, { useEffect } from "react";

import { firebase } from "../Firebase/firebase";
import { auth } from "../Firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SingIn = () => {
    const SignInWithFirebase = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return <button onClick={SignInWithFirebase}>Sign In with Google</button>;
};

export default SingIn;
