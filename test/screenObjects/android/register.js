class register {

    get inputName() {
        return $('//*[@resource-id="com.loginmodule.learning:id/textInputEditTextName"]')
    }

    get inputEmail() {
        return $('//*[@resource-id="com.loginmodule.learning:id/textInputEditTextEmail"]')
    }

    get inputPassword() {
        return $('//*[@resource-id="com.loginmodule.learning:id/textInputEditTextPassword"]')
    }

    get inputConfirmPassword() {
        return $('//*[@resource-id="com.loginmodule.learning:id/textInputEditTextConfirmPassword"]')
    }

    get registerBtn() {
        return $('//*[@resource-id="com.loginmodule.learning:id/appCompatButtonRegister"]')
    }

    async clickRegisterBtn() {
        await (await this.registerBtn).click()
    }

    async register(name, email, password, confirmPassword) {
        await this.inputName.setValue(name);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(confirmPassword);
        await this.registerBtn.click();
      }
}

module.exports = new register()