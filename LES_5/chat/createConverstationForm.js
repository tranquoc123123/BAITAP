import {InputCommon, inputCheck, status} from '../common/common.js'
import {Modal} from '../common/modal.js'
class conversationForm{
    container = document.createElement("div");
    modal = new Modal();
    form = document.createElement("form");
    ConverstationNameInput = new InputCommon("Conversation","text",
    "Enter your conversation name","conversationName","fa-regular fa-message");
    constructor(){
        this.container.appendChild(this.modal.container);
        this.container.style.visibility = "hidden"
        this.modal.setHeader("Create conversation")
        this.modal.setBody(this.form);
        this.modal.setOnClickCancle(()=>{this.setVisible(false)})
        this.modal.setOnClickCreate(this.handleCreateConversation)
        this.form.appendChild(this.ConverstationNameInput.container)
        this.ConverstationNameInput.forIcon.style.fontSize ="35px"
        
    }
    setVisible = (visible) => {
        if (visible) this.container.style.visibility = "visible";
        else this.container.style.visibility = "hidden"
    }
    handleCreateConversation =() =>{
       const name = this.ConverstationNameInput.getValue()
       db.collection("conversations").add({
           name: name,
           users: [firebase.auth().currentUser.email],
       })
    }
}
export {conversationForm}