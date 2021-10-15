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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name = message_data['name']
message = message_data['message']
like = message_data['like']
name_tag = "<h4>" + name + "<img class = 'user_tick src='tick.ping'></h4>"
message_tag = "<h4 class = 'message_h4'>" + message + "</h4>"
like_button = "<button class='btn btn warning' id="+firebase_message_id+" onclick = 'like(this.ID)' value="+like+">"
span_tag = "<span class='glyphicon gyplhicon thumbs-up'>" + like + "</span> </button>"

document.getElementById('output').innerHTML += name_tag + message_tag + like_button + span_tag 
//End code
      } });  }); }
getData();
function like(message_id) {
     button_id = message_id;
     var likes = document.getElementById(button_id).value 
     updated_likes = Number(likes) + 1;

     firebase.database().ref(room_name).child(message_id).update({
           like: updated_likes
     });
}
function logout() {
      window.location = "index.html"
      localstorage.removeItem("user_name")
      localStorage.removeItem("room_name")
}