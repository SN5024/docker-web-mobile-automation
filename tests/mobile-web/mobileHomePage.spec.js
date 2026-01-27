// tests/mobile-web/mobileHomePage.spec.js
import { test, expect, devices, chromium } from '@playwright/test';
import MobileHomePage from '../../pageobjects/mobile-web/MobileHomePage.js';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module workaround for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test.describe('Test Automation - Mobile Web', () => {
    let homePage;

    test.beforeEach(async ({ page }) => {
        homePage = new MobileHomePage(page);
        await homePage.navigate();
    });

    test('Upload Single File works on mobile', async () => {
        const filePath = path.resolve(__dirname, '../../resources/sample.txt');
        await homePage.uploadSingleFile(filePath);
        const successLocator = await homePage.verifySingleFileUploadSuccess();
        await expect(successLocator).toHaveText(/Single file selected/);
        const text = await successLocator.textContent();
        console.log('Upload Success Message:', text);
    });
});