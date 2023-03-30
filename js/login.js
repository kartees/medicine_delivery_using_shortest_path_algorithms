 var firebaseConfig = {
    apiKey: "AIzaSyC6Awe3i7xwbBQN1ZoiI5OYOrug6iBIlGM",
    authDomain: "daa-project-10d06.firebaseapp.com",
    databaseURL: "https://daa-project-10d06.firebaseio.com",
    projectId: "daa-project-10d06",
    storageBucket: "daa-project-10d06.appspot.com",
    messagingSenderId: "496839188662",
    appId: "1:496839188662:web:7f3575cb70b0ff1e904617",
    measurementId: "G-CE6LCW9Y5Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 
const auth = firebase.auth();
// var button = document.getElementById('login');

 // button.addEventListener('click', e => {
 function run() {  
    
    console.log("INSIDE login");
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const em = email.value;
    const pass = password.value;
    auth.signInWithEmailAndPassword(em, pass).then(
            res => {
                window.location.replace("algo.html");
            }
        )
        .catch(function(error) {

            alert("Login failed");

        })
}
