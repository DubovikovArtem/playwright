import { test } from "../src/fixtures/base_fixture";
const bookName = 'Git Pocket Guide';

test.describe('Fixtures', async () => {
    test.skip('Login as user', async ({ login, bookStor }) => {
        await login.navigateTo('/login');
        await login.fillInLoginFields(process.env.USER, process.env.PASSWORD);
        await login.clickLoginButton();
        await login.timeout(2000);
        await bookStor.clickBookStoreButton();
        await bookStor.findBookByNameAndClick(bookName);
        await bookStor.checkBoock(bookName);
        await bookStor.addBookToUserColletion();
        await bookStor.goToUserProfile();
        await bookStor.checkAddedBook(bookName);
    })
})
