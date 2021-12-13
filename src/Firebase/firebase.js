import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB3YngtDp0jE47AFbWhzl3lbSIQR5uTcJY",
    authDomain: "workoholics-rooms.firebaseapp.com",
    databaseURL:
        "https://workoholics-rooms-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "workoholics-rooms",
    storageBucket: "workoholics-rooms.appspot.com",
    messagingSenderId: "111753291893",
    appId: "1:111753291893:web:ba46083090ece754bd303c",
    measurementId: "G-R2TG5E5J0R",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
