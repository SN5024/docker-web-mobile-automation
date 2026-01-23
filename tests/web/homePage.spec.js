import { test } from '@playwright/test';
import HomePage from '../../pageobjects/web/HomePage';

test.describe('Test Automation Practice - Web', () => {

    test('Homepage loads and basic navigation works', async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.navigate();
        await homePage.verifyTitle();
        await homePage.clickFirstLink();
    });

});