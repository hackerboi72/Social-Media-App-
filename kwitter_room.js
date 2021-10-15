const firebaseConfig = {
      apiKey: "AIzaSyBdGtKvXeH5WhpMAtcO46--dRDeQ3D8alA",
      authDomain: "cte-8c380.firebaseapp.com",
      databaseURL: "https://cte-8c380-default-rtdb.firebaseio.com",
      projectId: "cte-8c380",
      storageBucket: "cte-8c380.appspot.com",
      messagingSenderId: "246042997194",
      appId: "1:246042997194:web:d5cd498422a5570ef55f33"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var username = localStorage.getItem("user_name") 
document.getElementById("username").innerHTML = "Welcome" + username + "!"; 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id=" + Room_names + "onclick='redirect(this.id)'>" + Room_names + "</div> <hr>"
document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();
function logout() {
      window.location = "index.html"
      localstorage.removeItem("user_name")
      localStorage.removeItem("room_name")
}
function addroom() {
      var room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room lol what a stupid explanation of what we are about to do"
        })
        localStorage.setItem("room_name", room_name)
        window.location = ("kwitter_page.html")
}
function redirect(roomname) {
      localStorage.setItem("room_name", room_name)
      window.location = ("kwitter_page.html")
}