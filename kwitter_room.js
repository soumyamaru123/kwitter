
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCiw4UMJ7c_7lP2tFRW7ngupzKNymXYIps",
      authDomain: "kwitterwebapp-90410.firebaseapp.com",
      projectId: "kwitterwebapp-90410",
      storageBucket: "kwitterwebapp-90410.appspot.com",
      messagingSenderId: "984186743731",
      appId: "1:984186743731:web:1dd8b8f70630380574f9c6",
      measurementId: "G-32T7B3BTPC"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    

    user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    
function addRoom()
{
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
            purpose : "Adding room name"
      });
           localStorage.setItem("room_name",room_name);
           window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
        //Start code
        console.log("Room name - " + Room_names);
      row = "<div class='room_name'  id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTMLm += row; 


        //End code
      });
   });
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
        window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "kwitter.html";
}
