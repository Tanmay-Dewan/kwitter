
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCYZhwqlT_mJGyoKBgSfFt7IcoPrscmU4M",
      authDomain: "kwitter-286dc.firebaseapp.com",
      databaseURL: "https://kwitter-286dc-default-rtdb.firebaseio.com",
      projectId: "kwitter-286dc",
      storageBucket: "kwitter-286dc.appspot.com",
      messagingSenderId: "469295247099",
      appId: "1:469295247099:web:81dec140af4db600410a5e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

            user_name = localStorage.getItem("user_name");
            document.getElementById("user_name").innerHTML = "Welcome " + user_name + "  !!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 console.log("Room name - " + Room_names);
 row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#"+ Room_names + " </div> <hr>";
 document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();


function AddRoom() 
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpuse: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"; 

}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
      
}

function Logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}