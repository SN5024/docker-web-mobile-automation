import { test } from '@playwright/test';
import HomePage from '../../pageobjects/web/HomePage';

function getToday() {
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${yyyy}-${mm}-${dd}`; // for type="date"
}
const today = getToday();

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
});