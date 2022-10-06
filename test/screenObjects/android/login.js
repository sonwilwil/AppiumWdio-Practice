class login {
    
    get inputUsername() {
        return $('//*[@resource-id="com.loginmodule.learning:id/textInputEditTextEmail"]')
    }

    get inputPassword() {
        return $('//*[@resource-id="com.loginmodule.learning:id/textInputEditTextPassword"]')
    }

    get loginBtn() {
        return $('//*[@resource-id="com.loginmodule.learning:id/appCompatButtonLogin"]')
    }

    get registerBtn() {
        return $('//*[@resource-id="com.loginmodule.learning:id/textViewLinkRegister"]')
    }

    async clickRegister() {
        await this.registerBtn.click()
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
      }
}

module.exports = new login()