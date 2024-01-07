import { expect, test } from '@playwright/test';
import { BasePage } from '../pageObject/BasePage';
import {expectedElements} from '../testData/data';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.skip('Test: Check that the elements are displayed', async ({ page }) => {
    let basePage = new BasePage(page);
    let arr = await basePage.verifyElements();
    expect(arr).toEqual(expectedElements);
});