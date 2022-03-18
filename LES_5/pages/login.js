import {InputCommon, inputCheck, status} from '../common/common.js'
import {setScreen} from '../index.js'
import {Register} from './Register.js'
// import './css/bootstrap.min.css';


class Login{
    
    container = document.createElement("div");
    row = document.createElement("div");
    right = document.createElement("div");
    left = document.createElement("div");
    title = document.createElement("H3");
    form = document.createElement("form");
    image = document.createElement("img")
    inputName = new InputCommon("Your Name", "text","Your Name","inputName","fas fa-user prefix")
    inputEmail = new InputCommon("Email", "email","Your Mail","inputEmail","fa-solid fa-envelope")
    inputPassword = new InputCommon("Password", "password","Enter your password","inputPassword","fa-solid fa-key")
    actionContainer = document.createElement("div")
    btnLogin = document.createElement("button")
    btnRes = document.createElement("button")
    btnCheck = new inputCheck("Remember me")
    constructor(){
        this.title.innerHTML = "Login"
        // 
        this.container.appendChild(this.form)
        this.container.className ="container"
        this.image.src ="https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg"
        this.image.className = "img-fluid"
        this.left.className = "col-8"
        this.right.className = "col-4"
        this.row.className = "row"
        this.row.style.marginTop ="50 px"
        this.form.appendChild(this.title)
        //this.form.appendChild(this.inputName.container);
         this.form.appendChild(this.inputEmail.container);
        this.form.appendChild(this.inputPassword.container);
        this.form.appendChild(this.btnCheck.container)
        this.btnCheck.container.style.marginTop = "30px"
        this.btnCheck.container.style.marginLeft = "50px"
        this.btnLogin.style.marginTop ="30px"
        this.btnLogin.style.marginLeft ="30px"
        this.right.style.paddingTop ="90px"
        this.btnLogin.innerHTML = "LOGIN"
        this.btnLogin.className ="btn btn-primary"
        this.btnRes.innerHTML = "Create an account"
        this.btnRes.className ="btn btn-link"
        this.btnRes.style.textDecoration = "underline"
        this.btnLogin.addEventListener("click", this.handleLogin)
        this.btnRes.addEventListener("click", 
        this.handleRedirectRegister)
        this.form.appendChild(this.btnLogin);
        // this.form.appendChild(this.btnRes);
        this.right.appendChild(this.form)
        this.left.appendChild(this.image)
        this.left.appendChild(this.btnRes)
        this.left.style.textAlign ="center"
        this.row.appendChild(this.left)
        this.row.appendChild(this.right)
        this.container.appendChild(this.row)
    }
    handleRedirectRegister = (e) =>{
        e.preventDefault()
        const rst = new Register()
        setScreen(rst.container)
    }
    
    handleLogin = (e) => {
        let rtn = status.invalid;
        e.preventDefault();
    
        // Validation
        const emailValue = this.inputEmail.getValue();
        const password = this.inputPassword.getValue();
    
         rtn =  this.inputEmail.validateEmail() * this.inputPassword.validatePassword();

        if (rtn == status.fine)
        {
            // Login
            firebase
            .auth()
            .signInWithEmailAndPassword(emailValue, password)
            .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            console.log(`Đăng nhập thành công`);
            })
            .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
    
            console.log(errorMessage);
            
            });
        }
    };

}
export {Login}