import { expect, test } from '@playwright/test';
import { LoginPage } from '../pageObject/LoginPage';
import { ICredentials } from '../utilis/credentials.interface';

const login = process.env.USER;
const password = process.env.PASSWORD;

test.beforeEach(async ({ page }) => {
    await page.goto('login');
    console.log(typeof login);
    console.log(typeof password);
});

test('Test: Login', async ({ page }) => {
    let loginPage = new LoginPage(page);

    // const creds: ICredentials = {
    //     password: process.env.PASSWORD,
    //     username: process.env.USER
    // }
    await loginPage.fillInLoginFields(login, password);
    await loginPage.clickLoginButton();
    await page.waitForTimeout(2000);
    let actualUrlElements = page.url();
    console.log(actualUrlElements);
    expect(actualUrlElements).toEqual('https://demoqa.com/profile');
});
    
