import {InputCommon, inputCheck, status} from '../common/common.js'
import {conversationForm} from './createConverstationForm.js'
class ConverstationList{
    container = document.createElement("div");
    btnCreateConversation = document.createElement("button")
    CreateConversationForm = new conversationForm();

    constructor() {
        this.btnCreateConversation.innerHTML = "+ Create Conversation"
        this.container.appendChild(this.btnCreateConversation)
        this.btnCreateConversation.className = "btn btn-info"
        this.btnCreateConversation.addEventListener("click", this.handleVisible)
        this.container.appendChild(this.CreateConversationForm.container)
    }
    handleVisible=() =>{
        this.CreateConversationForm.setVisible(true);
    }
    

    
}

export {ConverstationList}