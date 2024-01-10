import { Locator, Page, expect } from "@playwright/test";

export class BasePage {
    readonly page: Page;
    readonly cardElements: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cardElements = this.page.locator('.card-body');
    }

    async getListOfElements(): Promise<string[]> {
        return await this.cardElements.allInnerTexts();
    }

    async verifyElements(): Promise<string[]> {
        const countOfCardBodies: number = await this.cardElements.count();
        const actualElements: string[] = [];

        for (let i = 0; i < countOfCardBodies; i++) {
            const textValueOfElements: string = await this.cardElements.nth(i).innerText();
            actualElements.push(textValueOfElements);
        }

        console.log('actual el:----', actualElements);
        return actualElements;
    }

    async expectElemetns(received, expected) {
        expect(received).toEqual(expected);
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async timeout(milis) {
        await this.page.waitForTimeout(milis);
    }

    async acceptConfirmation() {
        this.page.on('dialog', dialog => dialog.accept());
        await this.page.getByRole('button').click();
    }
}

