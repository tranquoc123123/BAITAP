import {ConverstationList} from "../chat/conversationList.js";
import {ConversationInfo} from "../chat/conversationInfo.js";
class Chat {
    container = document.createElement("div");
    btnLogout = document.createElement("button");
    converstationList = new ConverstationList()
    conversationInfor = new ConversationInfo();
    activeConversation; 
    constructor() {
      this.container.appendChild(this.converstationList.container)
      this.container.className = "container"
      this.btnLogout.innerHTML = "Log out";
      this.btnLogout.className= "btn btn-outline-secondary"
      this.btnLogout.addEventListener("click", this.handleLogout);      
      this.container.appendChild(this.btnLogout);
      this.converstationList.setOnConversationItemCLick(this.setActiveConversation);
      this.container.appendChild(this.conversationInfor.container);
      this.subscribeConversation();
    }

    setActiveConversation = (conversation) =>{
      this.activeConversation = conversation
      console.log({conversation});
      this.conversationInfor.setName(conversation.name);
      this.converstationList.setStyleActiveConversation(conversation);
      // this.ConverstationList.setOnConversationItemCLick(conversation)
      // console.log(conversation)
    }


    subscribeConversation =() =>{
      db.collection("conversations")
      .onSnapshot((snapshot) => {

          snapshot.docChanges().forEach((change) => {
              if (change.type === "added") {
                this.converstationList.handleCreateConversationAdded(change.doc.id,change.doc.data().name,change.doc.data().users)
                console.log(change.doc.data().name);
              }
              if (change.type === "modified") {

              }
              if (change.type === "removed") {
                  this.converstationList.removeItem(change.doc.id);
              }
          });
      });
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