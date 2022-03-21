import {InputCommon, inputCheck, status} from '../common/common.js'
import {conversationForm} from './createConverstationForm.js'
import {ConversationItem} from './ConversationItem.js'

class ConverstationList{
    container = document.createElement("div");
    btnCreateConversation = document.createElement("button")
    CreateConversationForm = new conversationForm();
    onConversationItemClick;
    conversations = [];
  
    constructor() {
        this.btnCreateConversation.innerHTML = "+ Create Conversation"
        this.container.appendChild(this.btnCreateConversation)
        this.btnCreateConversation.className = "btn btn-info"
        this.btnCreateConversation.addEventListener("click", this.handleVisible)
        this.container.appendChild(this.CreateConversationForm.container)
    }

    setOnConversationItemCLick = (listener) => {
        this.onConversationItemClick = listener;
    }

    handleCreateConversationAdded = (id, name, users) =>{
        const conversation = new ConversationItem(id, name, users);
        conversation.setOnClick((id, name, users)=>{
            this.onConversationItemClick({
                id: id,
                name: name,
                users: users,
              });
        });
        this.conversations.push(conversation);
        this.container.appendChild(conversation.container);
    }

    handleVisible = () =>{
        this.CreateConversationForm.setVisible(true);
    }
    setStyleActiveConversation = (conversation) => {
        this.conversations.forEach((item) => {
          if (item.id === conversation.id) {
            item.setActiveHighlight(true);
          } else {
            item.setActiveHighlight(false);
          }
        });
      };
    removeItem = (id) => {
        const index = this.conversations.findIndex(
            (item) => item.id === id
        );
        const conversation = this.conversations.find((item) => item.id === id);
        this.conversations.splice(index , 1);
        conversation.container.remove();
    }

    
}

export {ConverstationList}