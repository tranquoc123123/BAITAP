import { InputCommon } from './common/inputCommon.js'
import { setScreen } from './index.js'
import { Login } from './login.js'

class Register {
    container = document.createElement("div")
    title = document.createElement("h3")

    form = document.createElement("form")
    inputEmail = new InputCommon("Email: ", "email", "Enter your email", "inputEmail")
    inputPassword = new InputCommon("Password: ", "password", "Enter your password", "inputPassword")
    inputConfirmPassword = new InputCommon("Confirm password: ", "password", "Enter your confirm password", "inputConfirmPassword")

    actionContainer = document.createElement("div")
    btnLogin = document.createElement("button")
    btnRegister = document.createElement("button")

    constructor() {
        this.title.innerHTML = "Register"

        this.container.appendChild(this.form)

        this.form.appendChild(this.title)
        this.form.appendChild(this.inputEmail.container)
        this.form.appendChild(this.inputPassword.container)
        this.form.appendChild(this.inputConfirmPassword.container)

        this.btnLogin.innerHTML = "Go to login"
        this.btnRegister.innerHTML = "Register"
        this.btnLogin.addEventListener("click", (e) => {
            e.preventDefault()
            const loginScreen = new Login()
            setScreen(loginScreen.container)
        })
        this.btnRegister.addEventListener("click", (e) => {
            e.preventDefault()
            console.log("Register");
        })

        this.form.appendChild(this.btnLogin)
        this.form.appendChild(this.btnRegister)
    }
}

export { Register }