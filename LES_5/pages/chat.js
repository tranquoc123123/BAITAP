import {ConverstationList} from "../chat/conversationList.js";
class Chat {
    container = document.createElement("div");
    btnLogout = document.createElement("button");
    ConverstationList = new ConverstationList()
    constructor() {
      this.container.appendChild(this.ConverstationList.container)
      this.container.className = "container"
      this.btnLogout.innerHTML = "Log out";
      this.btnLogout.className= "btn btn-outline-secondary"
      this.btnLogout.addEventListener("click", this.handleLogout);
      
      this.container.appendChild(this.btnLogout);
    }
  
    handleLogout = (e) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log("Sign out successful");
        })
        .catch((error) => {
          // An error happened.
          console.log(error.message);
        });
    };
  }
  
  export { Chat };