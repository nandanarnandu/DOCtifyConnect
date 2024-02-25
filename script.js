// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBEBz9R6ZTnxrvsktxKM7DpXMzbu9gG2aw",
    authDomain: "doctifyconnect-4d37b.firebaseapp.com",
    projectId: "doctifyconnect-4d37b",
    storageBucket: "doctifyconnect-4d37b.appspot.com",
    messagingSenderId: "802781082120",
    appId: "1:802781082120:web:00a3c8bf404b529524d7bd"
  };
  
  const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}