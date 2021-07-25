
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAkvohTDfxLpvV5Ig1qeE0OGujyRqQRD3I",
      authDomain: "class-test-ef83a.firebaseapp.com",
      databaseURL: "https://class-test-ef83a-default-rtdb.firebaseio.com",
      projectId: "class-test-ef83a",
      storageBucket: "class-test-ef83a.appspot.com",
      messagingSenderId: "260606179237",
      appId: "1:260606179237:web:6b6ff826af8838dae15a4c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addroom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
function redirect_to_room_name(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_room.html";
}