import { test, expect } from '@playwright/test';
import HomePage from '../../pageobjects/web/HomePage';
import path from 'path';
import { fileURLToPath } from 'url';

function getToday() {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`; // for type="date"
}
const today = getToday();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test.describe('Test Automation Practice - Web', () => {
    let homePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    test('Homepage loads and verify title', async () => {
        await homePage.verifyTitle();
        await homePage.clickFirstLink();
    });

    test('GUI Elements section works correctly', async () => {
        await homePage.fillName('Hello');
        await homePage.fillEmail('Hello@test.com');
        await homePage.fillPhone('1234567890');
        await homePage.fillAddress('Test Address');
        await homePage.selectGender('female');
        await homePage.selectDay('sunday');
        await homePage.selectCountry('usa');
        await homePage.pickColor('red');
        await homePage.pickDate(today);
    });

    test('Date Range Picker works correctly', async () => {
        console.log('Today is:', today);
        await homePage.selectDateRange(today, today);
        await homePage.submitDateRange();
    });

    test('Single File Upload works correctly', async () => {
        const filePath = path.resolve(__dirname, '../../resources/sample.txt');
        await homePage.uploadSingleFile(filePath);
        const successMessage = await homePage.verifySingleFileUploadSuccess();
        await expect(successMessage).toHaveText(/Single file selected/);
        // log the success message
        console.log('Single File Upload Success Message:', await successMessage.textContent());
    })

});