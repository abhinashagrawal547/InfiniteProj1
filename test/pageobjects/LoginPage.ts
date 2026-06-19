import BasePage from "./BasePage";

class LoginPage extends BasePage {
    
    public get usernameInput() {
        return $('#username');
    }

    public get passwordInput() {
        return $('#password');
    }

    public get loginButton() {
        return $('button[type="submit"]');
    }

    public async open(): Promise<void> {
        await super.open('/login')
    }

    public async login(username: string, password: string): Promise<void>{
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click()
    }
}

export default new LoginPage()