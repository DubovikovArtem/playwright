import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class Elements extends BasePage {
    readonly page: Page;
    readonly cardNameElements: Locator;
    readonly expandedElements: Locator;
    readonly dbClickBtn: Locator;
    readonly rightClickBtn: Locator;
    readonly simpleClickBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.cardNameElements = this.page.getByText('Elements');
        this.expandedElements = this.page.locator('.collapse.show .text');
        this.dbClickBtn = this.page.getByText('Double Click Me');
        this.rightClickBtn = this.page.getByText('Right Click Me');
        this.simpleClickBtn = this.page.locator('.btn-primary');
    }

    async findCardAndClick(): Promise<void> {
        await this.cardNameElements.click();
    }

    async tapMenuIconByName(buttonNmae): Promise<void> {
        const expandedElementsCount: number = await this.expandedElements.count();
        for (let i = 0; i < expandedElementsCount; i++) {
            let textValueOfElements: string = await this.expandedElements.nth(i).innerText();
            if (textValueOfElements === buttonNmae) {
                await this.page.getByText(buttonNmae).click();
            } else {
                console.log(`name == ${buttonNmae} not exist`);
            }
        }
    }
    async dbClickButton(): Promise<void> {
        await this.dbClickBtn.dblclick();
        let doubleClickMessage = 'You have done a double click';
        let dblClickMsgLocator = await this.page.locator('#doubleClickMessage').innerText();
        expect(dblClickMsgLocator).toEqual(doubleClickMessage);
    }

    async rightClickButton(): Promise<void> {
        await this.rightClickBtn.click({button: 'right'});
        let rightClickMessage = 'You have done a right click';
        let rightClickMsgLocator = await this.page.locator('#rightClickMessage').innerText();
        expect(rightClickMsgLocator).toEqual(rightClickMessage);
    }

    async simpleClickButton(): Promise<void> {
        await this.simpleClickBtn.last().click();
        let clickMessage = 'You have done a dynamic click';
        let clickMsgLocator = await this.page.locator('#dynamicClickMessage').innerText();
        expect(clickMsgLocator).toEqual(clickMessage);
    }
}