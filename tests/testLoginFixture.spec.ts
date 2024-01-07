import { test } from "../src/fixtures/base_fixture";
const bookName = 'Git Pocket Guide';

test.describe('Fixtures', async () => {
    test.skip('Login as user', async ({ login, bookStor }) => {
        await login.navigateTo('/login');
        await login.fillInLoginFields(process.env.USER, process.env.PASSWORD);
        await login.clickLoginButton();
        await login.timeout(2000);

        await bookStor.clickBookStoreButton();
        await bookStor.timeout(2000);
        await bookStor.findBookByNameAndClick(bookName);
        await bookStor.timeout(2000);
        await bookStor.checkBoock(bookName);
        await bookStor.addBookToUserColletion();
        await bookStor.timeout(2000);
        await bookStor.navigateTo('/profile');
        await bookStor.timeout(2000);
        //await bookStor.isProfileContainTheBook();
        await bookStor.timeout(2000);
        await bookStor.navigateTo('/profile');
        await bookStor.timeout(2000);
    })
})
