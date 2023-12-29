import { Locator, Page, expect } from '@playwright/test';
import { ICredentials } from '../utilis/credentials.interface';

export class LoginPage {
    readonly page: Page;
    readonly imputLogin: Locator;
    readonly imputPasswd: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.imputLogin = page.locator('#userName')
        this.imputPasswd = page.locator('#password')
        this.loginButton = page.locator('#login')
    }

    //с интерфейсом не захотело!!!!!!!!!!
    // async fillInLoginFields(credential : ICredentials){
    //     await this.imputLogin.fill(credential.username);
    //     await this.imputPasswd.fill(credential.password);
    // }
    async fillInLoginFields(login, password) {
        await this.imputLogin.fill(login);
        await this.imputPasswd.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

}