import { test as base } from '@playwright/test';
import { LoginPage } from '../../pageObject/LoginPage';
import { BookStore } from '../../pageObject/BookStore';
type MyFixture = {
    login: LoginPage,
    bookStor: BookStore
}

const test = base.extend<MyFixture>({
    login: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage)
    },

    bookStor: async ({ page }, use) => {
        const bookStor = new BookStore(page);
        await use(bookStor)
    }
})

export { test };