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
        this.profileButtom = page.locator('#item-3').nth(5);
        this.bookTitleOnProfile = page.locator('rt-td').nth(2);
    }

    async clickBookStoreButton() {
        await this.bookStoreButton.click();
    }

    async findBookByNameAndClick(name) {
        await this.page.getByText(name).click();
    }

    async checkBoock(bookName) {
        let actualBookName = await this.bookTitle.innerText();
        console.log('actualBookName    ------- ', actualBookName);
        expect(actualBookName).toEqual(bookName);
    }

    async addBookToUserColletion() {
        await this.addBookButton.click();
        await this.page.waitForTimeout(2000);
    }

    async isProfileContainTheBook() {
        let x = this.bookTitleOnProfile.innerText();
        console.log(x);
    }
}