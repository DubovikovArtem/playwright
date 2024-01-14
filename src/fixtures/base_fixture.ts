import { APIRequestContext, test as base } from '@playwright/test';
import { LoginPage } from '../../pageObject/LoginPage';
import { BookStore } from '../../pageObject/BookStore';
import { request } from 'http';
type MyFixture = {
    login: LoginPage,
    bookStor: BookStore,
    userApi: APIRequestContext
}

const test = base.extend<MyFixture>({
    login: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage)
    },

    bookStor: async ({ page }, use) => {
        const bookStor = new BookStore(page);
        await use(bookStor)
    },
    // это у меня не работает  request.newContext выдает ошибку
    userApi: async ({ }, use) => {
        // const newCtx = await request.newContext({
        //     await use(newCtx)
        // });
    }
})

export { test };