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

let tef = firebase.database().ref("items")

    tef.on("value", fotData)
     

     function fotData(data) {
        data = data.val();
        let keys = Object.keys(data);
        console.log(data[keys[0]]);
         var fest =Number(data[keys[0]]);

        console.log(fest);
        document.getElementById("counter").innerHTML = fest;
}





const uname = document.getElementById('name');
const uphone = document.getElementById('phone');
const uaddress = document.getElementById('address');
const ucount = document.getElementById('count');
var test;
const button = document.getElementById('order');



button.addEventListener('click', e => {
    e.preventDefault()
    
    console.log("INSIDE order");
    const name = uname.value;
    const phone = uphone.value;
    const address = uaddress.value;
    const count = Number(ucount.value);
    const bill = (count*15);
    localStorage.setItem("billmy", bill);

    let ref = firebase.database().ref("items")

    ref.on("value", gotData, errdata)
     

     function gotData(data) {
        data = data.val();
        let keys = Object.keys(data);
        console.log(data[keys[0]]);
         test =Number(data[keys[0]]);


        console.log(test);
        document.getElementById("counter").innerHTML = test;
         if( count <= test) 
     {
             console.log(test);
            
                   
               let ref = firebase.database().ref().child("order");
              let data = {
                    name: name,
                    phone: phone,
                    address: address,
                    count: count,
                    bill: bill,
                }
                ref
                    .child(bill)
                    .set(data)
                    .then(ref => { 
                        console.log("Saved");
                        
                         var test1 = Number(test - count);
                      console.log(test1); 
                    firebase.database().ref().child("items").update({'count': test1});
                      window.location.replace("success.html");
                     
                     console.log("updated");
                    
                        })
                    .catch(console.log);

               
            
                   
   }
      
    else {
        alert("NO STACKS  ");
    }
      }
       function errdata(error) {
        console.log(error.message, error.code)
    }

  



})
