import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey : process.env.REACT_APP_API_KEY,
    appId : process.env.REACT_APP_APP__ID,
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();