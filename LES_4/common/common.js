const status = {
    empty: 0,
    invalid: -1,
    fine: 1
 };

class InputCommon{

    container = document.createElement("div");
    forInput = document.createElement("div");
    forIcon = document.createElement("div");
    label = document.createElement("i");
    input = document.createElement("input");
    errMessage = document.createElement("div");

    constructor(lable, inputType, placeholder, name, icon){
        this.label.className = icon
        // 
        this.input.input = inputType
        this.input.placeholder = placeholder
        this.input.name = name
        this.input.className ="form-control"
        this.input.Type = inputType
        this.container.className = "md-form"
        // 

        this.forInput.className = "col-md-11"
        // 
        this.forIcon.className = "col-md-1"
        this.forIcon.style.textAlign ="center"
        this.forInput.appendChild(this.input)
        this.forIcon.appendChild(this.label)
        // 
        this.container.style.marginTop ="20px"
        this.container.className = "row"
        this.container.appendChild(this.forIcon)
        this.container.appendChild(this.forInput)
        this.container.appendChild(this.errMessage)
        this.container.style.height = "100%"
    }
    getValue =() =>{
        return this.input.value;
    }
    setErrorMessage = (errMessage) => {
        this.errMessage.innerHTML = errMessage
        this.errMessage.style.color = "red"
        this.errMessage.style.fontStyle = "italic"
        this.input.style.borderColor = "red"
    }
    clearErrorMessage = () => {
        this.errMessage.innerHTML = ""
        this.errMessage.style.color = "red"
        this.errMessage.style.fontStyle = "italic"
        this.input.style.borderColor = "#495057"
        console.log("clear")
    }

    validateEmail(){
        if (!this.input.value) {
            this.setErrorMessage("Email cannot be empty");
            return 0;
          } else {
              let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
              if(!regex.test(this.input.value)){
                  this.setErrorMessage("The Email is invalid");
                  return -1;
              }
              else{
                  this.clearErrorMessage();
                  return 1;
              }
          }
    }
    validatePassword(){
        if (!this.input.value) {
            this.setErrorMessage("Password cannot be empty");
            return 0;
          } else {
            let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
              if(!regex.test(this.input.value)){
                  this.setErrorMessage("The Password is invalid");
                  return -1;
              }
              else{
                this.clearErrorMessage();
                  return 1;
              }
          }
    }
    valiteName(){
        if (!this.input.value) {
            this.setErrorMessage("The name cannot be empty");
            return 0;
          } else {
            let regex = new RegExp('[a-zA-Z]{5,}');
              if(!regex.test(this.input.value)){
                  this.setErrorMessage("The name is invalid");
                  return -1;
              }
              else{
                this.clearErrorMessage();
                  return 1;
              }
          }
    }
}

class inputCheck {
    container = document.createElement('div');
    input = document.createElement('input');
    lable = document.createElement('label')
    constructor(lable){
        this.input.type = "checkbox"
        this.input.className ="form-check-input"
        this.lable.className ="form-check-label"
        this.lable.innerHTML = lable
        this.container.appendChild(this.input)
        this.container.appendChild(this.lable)
    }
}



export {InputCommon, inputCheck, status}