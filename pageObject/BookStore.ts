import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class BookStore extends BasePage {
    readonly page: Page;
    readonly bookStoreButton: Locator;
    readonly bookTitle: Locator;
    readonly addBookButton: Locator;
    readonly profileButtom: Locator;
    readonly bookTitleOnProfile: Locator;
   
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.bookStoreButton = page.locator('#gotoStore');
        this.bookTitle = page.locator('#userName-value').nth(2);
        this.addBookButton = page.getByText('Add To Your Collection');
       // this.profileButtom = page.locator('li').filter({ hasText: 'Profile' });
        this.profileButtom = page.getByRole('list').getByText('Profile');
        //page.getByRole('list').getByText('Profile')
        this.bookTitleOnProfile = page.getByRole('grid');
    }

    async clickBookStoreButton() {
        await this.bookStoreButton.click();
        await this.page.waitForTimeout(2000);
    }

    async findBookByNameAndClick(name) {
        await this.page.getByText(name).click();
        await this.page.waitForTimeout(2000);
    }

    async checkBoock(bookName) {
        let actualBookName = await this.bookTitle.innerText();
        console.log('actualBookName    ------- ', actualBookName);
        expect(actualBookName).toEqual(bookName);
        await this.page.waitForTimeout(2000);
    }

    async addBookToUserColletion() {
        await this.addBookButton.click();
        await this.page.waitForTimeout(2000);
    }

    async goToUserProfile() {
        await this.profileButtom.click();
        await this.page.waitForTimeout(2000);
    }

    async checkAddedBook(bookName){
        await expect(this.bookTitleOnProfile).toContainText(bookName)
    }
}