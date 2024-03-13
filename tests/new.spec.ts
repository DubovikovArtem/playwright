//import { test } from "../src/fixtures/base_fixture";
const bookName = 'Git Pocket Guide';
import { test, expect } from '@playwright/test';
// test.describe('Fixtures', async () => {
//     test.only('Login as user', async ({ login, bookStor }) => {
//         await login.navigateTo('/login');
//         await login.fillInLoginFields(process.env.USER, process.env.PASSWORD);
//         await login.clickLoginButton();
//     })
// })



test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});