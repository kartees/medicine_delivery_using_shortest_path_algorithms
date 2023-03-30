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
let ref = firebase.database().ref("order");

 ref.on("value", function(data){
  	data.forEach(function (chill)
  	{
  		
  		var tbl = document.getElementById('ord');
  		var row =  tbl.insertRow();
  		var call1 = row.insertCell();
  		var call2 = row.insertCell();
  		var call3 = row.insertCell();
  		var call4 = row.insertCell();
      var call5 = row.insertCell();
  		var data = chill.val();
  		let keys = Object.keys(data);
  		console.log(data[keys[2]]);
  		call1.innerHTML = data[keys[3]];
  		call2.innerHTML = data[keys[0]];
  		call3.innerHTML = data[keys[4]];
  		call4.innerHTML = data[keys[2]];
      call5.innerHTML = data[keys[1]];
  		console.log("Hello");
  		

  	})
  	
  })