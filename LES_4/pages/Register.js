import {InputCommon, inputCheck, status} from '../common/common.js'
import {setScreen} from '../index.js'
import {Login} from './login.js'

class Register{
    container = document.createElement("div");
    row = document.createElement("div");
    right = document.createElement("div");
    left = document.createElement("div");
    title = document.createElement("H3");
    form = document.createElement("form");
    inputName = new InputCommon("Your Name", "text","Your Name","inputName","fas fa-user prefix")
    inputEmail = new InputCommon("Email", "email","Enter your email","inputEmail","fa-solid fa-envelope")
    inputPassword = new InputCommon("Password", "password","Enter your password","inputPassword","fa-solid fa-key")
    reinputPassword = new InputCommon("Password", "password","Confirm your password","inputPassword","fa-solid fa-key")
    actionContainer = document.createElement("div")
    btnRes = document.createElement("button")
    image = document.createElement("img")
    btnLogin = document.createElement("button")
    btnCheck = new inputCheck("I agree all statements in Termns of Service")
    constructor(){
        this.container.appendChild(this.form);
        this.container.className = "container"
        this.title.innerHTML = "Sign up"
        this.row.style.marginTop ="50 px"
        this.form.appendChild(this.title)
        this.form.appendChild(this.inputName.container);
        this.form.appendChild(this.inputEmail.container);
        this.form.appendChild(this.inputPassword.container);  
        this.form.appendChild(this.reinputPassword.container);
        this.form.appendChild(this.btnCheck.container);
        this.image.src ="https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg"
        this.image.className = "img-fluid"    
        this.btnRes.innerHTML = "Register"
        this.btnRes.style.marginTop ="30px"
        this.btnRes.style.marginLeft ="30px"
        this.btnRes.className= "btn btn-primary"
        this.left.className = "col-4"
        this.left.style.paddingTop ="90px"
        this.right.className = "col-8"
        this.row.className  ="row"
        this.btnLogin.innerHTML = "I am already member"
        this.btnLogin.className ="btn btn-link"
        this.btnLogin.style.textDecoration = "underline"

        this.left.appendChild(this.form)
        this.left.appendChild(this.btnRes)
        this.row.appendChild(this.left)
        this.row.appendChild(this.right)
        this.right.appendChild(this.image)
        this.right.appendChild(this.btnLogin)
        this.right.style.textAlign ="center"
        this.container.appendChild(this.row)
        this.btnRes.addEventListener("click", this.handleRegister)
        this.btnLogin.addEventListener("click", this.handleRedirectLogin)
        // this.form.appendChild(this.btnLogin);
    }
    handleRegister = (e) => {
        let rtn = status.invalid;
        e.preventDefault()

        // Get value
        const emailValue = this.inputEmail.getValue();
        const password = this.inputPassword.getValue();

        rtn =  this.inputEmail.validateEmail()* this.inputPassword.validatePassword()*
                this.reinputPassword.validatePassword()* this.inputName.valiteName();
        if (rtn == status.fine) {
            if (this.reinputPassword.getValue() != this.inputPassword.getValue()){
                this.reinputPassword.setErrorMessage("Confrim password not match")
                rtn = status.invalid;
            }
        }
        if (rtn == status.fine) {
            firebase.auth().createUserWithEmailAndPassword(emailValue, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...
                console.log(`User ${email} is created`);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                console.log(errorMessage);
            });
        }
    }
    handleRedirectLogin = (e) =>{
        e.preventDefault();
        const login = new Login();
        setScreen(login.container)
    }
}
export {Register}