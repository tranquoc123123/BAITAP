class Modal {
    container = document.createElement("div")
    modalContainer = document.createElement("div")
    header = document.createElement("h3")
    body = document.createElement("div")
    footer = document.createElement("div")
    btnCreate = document.createElement("button")
    btnCancel = document.createElement("button")

    constructor(){
        this.container.appendChild(this.modalContainer)
        this.modalContainer.appendChild(this.header)
        this.modalContainer.appendChild(this.body)
        this.modalContainer.appendChild(this.footer)

        this.btnCreate.innerHTML = "Create"
        this.btnCreate.className = "btn btn-info"
        this.btnCancel.innerHTML = "Cancel"
        this.btnCreate.style.marginLeft = "25px"
        this.btnCancel.className ="btn btn-secondary"
        this.footer.style.marginTop ="25px"
        this.footer.style.marginBottom ="25px"
        this.footer.style.textAlign = "right"
        this.footer.appendChild(this.btnCancel)
        this.footer.appendChild(this.btnCreate)
        this.modalContainer.appendChild(this.footer)
        

    }
    setHeader = (title) =>{
        this.header.innerHTML = title
    }
    setBody = (component) =>{
        this.body.innerHTML = ""
        this.body.appendChild(component);
    }
    setOnClickCancle = (listener) => {
        this.btnCancel.onclick =  listener;
    }
    setOnClickCreate= (listener) => {
        this.btnCreate.onclick =  listener;
    }

}
export {Modal}