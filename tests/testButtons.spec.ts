import { expect, test } from '@playwright/test';
import { Elements } from '../pageObject/ElementsPage';
import {expectedElements} from '../testData/data';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('second test',async ({ page }) => {
    let elements = new Elements(page);
    await elements.findCardAndClick();
    let actualUrlElements = page.url();
    expect(actualUrlElements).toEqual('https://demoqa.com/elements');
    await elements.tapMenuIconByName('Buttons');
    let actualUrlButtons = page.url();
    expect(actualUrlButtons).toEqual('https://demoqa.com/buttons');
    await elements.dbClickButton();
    await elements.rightClickButton();
    await elements.simpleClickButton();
});
