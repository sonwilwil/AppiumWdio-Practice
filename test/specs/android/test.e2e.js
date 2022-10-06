const LoginScreen = require("../../screenObjects/android/login");
const RegisterScreen = require("../../screenObjects/android/register");

describe('Testing App Test', () => {
    context('Register page', () => {
        it('Register successful', async () => {
            LoginScreen.clickRegister()
            RegisterScreen.register('wilson','wil@gmail.com','pass123','pass123')
            const errorMsg = await $('//*[@text="Registration Successful"]')
            await expect(errorMsg).toExist()
        });
        it('Register failed with all blank field', async () => {
            RegisterScreen.clickRegisterBtn()
            const errorMsg = await $('//*[@text="Enter Full Name"]')
            await expect(errorMsg).toExist()
        });
        it('Register failed with blank name field', async () => {
            RegisterScreen.register('','wil@gmail.com','pass123','pass123')
            const errorMsg = await $('//*[@text="Enter Full Name"]')
            await expect(errorMsg).toExist()
        });
        it('Register failed with invalid email format', async () => {
            RegisterScreen.register('wilson','wilwilwil','pass123','pass123')
            const errorMsg = await $('//*[@text="Enter Valid Email"]')
            await expect(errorMsg).toExist()
        });
        it('Register failed with existing registered email', async () => {
            RegisterScreen.register('wilson','wil@gmail.com','pass123','pass123')
            const errorMsg = await $('//*[@text="Email Already Exists"]')
            await expect(errorMsg).toExist()
        }); 
        it('Register failed with password and confirm password does not match', async () => {
            RegisterScreen.register('wilson','wil@gmail.com','pass123','aaa')
            const errorMsg = await $('//*[@text="Password Does Not Matches"]')
            await expect(errorMsg).toExist()
            driver.back()
        });
    });
    context('Login Page', () => {
        it('Login Successful', async () => {
            LoginScreen.login('wil@gmail.com','pass123')
            const titleTxt = await $('//*[@text="Android NewLine Learning"]')
            await expect(titleTxt).toExist()
            driver.back()
        });
        it('Login failed with wrong password', async () => {
            LoginScreen.login('wil@gmail.com','haha')
            const errorMsg = await $('//*[@text="Wrong Email or Password"]')
            await expect(errorMsg).toExist()
        });
        it('Login with unregistered email', async () => {
            LoginScreen.login('hahaha@gmail.com','wrongpass')
            const errorMsg = await $('//*[@text="Wrong Email or Password"]')
            await expect(errorMsg).toExist()
        });
        it('Login failed with all blank field', async () => {
            LoginScreen.login('','')
            const errorMsg = await $('//*[@text="Enter Valid Email"]')
            await expect(errorMsg).toExist()
        });
        it('Login with invalid email format and blank password field', async () => {
            LoginScreen.login('hahaha','')
            const errorMsg = await $('//*[@text="Enter Valid Email"]')
            await expect(errorMsg).toExist()
        });
        it('Login failed with blank password field', async () => {
            LoginScreen.login('wil@gmail.com','')
            const errorMsg = await $('//*[@text="Enter Valid Email"]')
            await expect(errorMsg).toExist()
        });
    });
});