import { Locator, expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('HW lesson 25', async () => {
    test.skip('Test: Check that the elements are displayed', async ({ page }) => {
        const listOfElements: string[] = await page.locator('.card-body').allInnerTexts();
        console.log('array array ++++ ', listOfElements);
        const expectedElements = [
            'Elements',
            'Forms',
            'Alerts, Frame & Windows',
            'Widgets',
            'Interactions',
            'Book Store Application'
        ];

        let countOfCardBodies: number = await page.locator('.card-body').count();
        let actualElements: string[] = [];
        for (let i = 0; i < countOfCardBodies; i++) {
            let textValueOfElements: string = await page.locator('.card-body').nth(i).innerText();
            actualElements.push(textValueOfElements);
        }
        console.log(actualElements);
        expect(actualElements).toEqual(expectedElements);

    });
    test.skip('Test: Check the ability to click the buttons', async ({ page }) => {
        let cardElements: Locator = page.getByText('Elements');
        await cardElements.click();
        let actualUrlElements = page.url();
        expect(actualUrlElements).toEqual('https://demoqa.com/elements');
        // это на будущее (хочу потом метод сделать)
        const expandedElementsCount: number = await page.locator('.collapse.show .text').count();
        for (let i = 0; i < expandedElementsCount; i++) {
            let textValueOfElements: string = await page.locator('.collapse.show .text').nth(i).innerText();
            if (textValueOfElements === 'Buttons') {
                await page.getByText('Buttons').click();
            }
        }
        let actualUrlButtons = page.url();
        expect(actualUrlButtons).toEqual('https://demoqa.com/buttons');

        await page.getByText('Double Click Me').dblclick();
        let doubleClickMessage = 'You have done a double click';
        let dblClickMsgLocator = await page.locator('#doubleClickMessage').innerText();
        expect(dblClickMsgLocator).toEqual(doubleClickMessage);

        await page.getByText('Right Click Me').click({button: 'right'});
        let rightClickMessage = 'You have done a right click';
        let rightClickMsgLocator = await page.locator('#rightClickMessage').innerText();
        expect(rightClickMsgLocator).toEqual(rightClickMessage);

        await page.locator('.btn-primary').last().click();
        let clickMessage = 'You have done a dynamic click';
        let clickMsgLocator = await page.locator('#dynamicClickMessage').innerText();
        expect(clickMsgLocator).toEqual(clickMessage);
    });
});