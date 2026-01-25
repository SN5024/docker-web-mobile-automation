import { expect } from '@playwright/test';

export default class HomePage {
    constructor(page) {
        // page object model elements
        this.page = page;
        this.firstLink = page.locator('a').first();
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.phoneInput = page.locator('#phone');
        this.addressInput = page.locator('#textarea');
        this.countryDropdown = page.locator('#country');
        this.colorPicker = page.locator('#colors');
        this.datePicker1 = page.locator('#datepicker');
        this.startDateInput = page.locator('#start-date');
        this.endDateInput = page.locator('#end-date');
        this.submitDateButton = page.locator('.submit-btn');
    }

    async navigate() {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async verifyTitle() {
        await expect(this.page).toHaveTitle(/Automation Testing Practice/);
    }

    async clickFirstLink() {
        await this.firstLink.click();
    }

    // ---------- GUI Elements Section ----------

    async fillName(name) {
        await this.nameInput.fill(name);
    }

    async fillEmail(email) {
        await this.emailInput.fill(email);
    }

    async fillPhone(phone) {
        await this.phoneInput.fill(phone);
    }

    async fillAddress(address) {
        await this.addressInput.fill(address);
    }

    async selectGender(gender) {
        await this.page.locator(`input[name="gender"][value="${gender}"]`).check();
    }

    async selectDay(day) {
        await this.page.locator(`label[class="form-check-label"][for="${day}"]`).check();
    }

    async selectCountry(country) {
        await this.countryDropdown.selectOption(country);
    }

    async pickColor(color) {
        await this.colorPicker.selectOption(color);
    }

    async pickDate(date) {
        await this.datePicker1.fill(date);
    }

    async selectDateRange(startDate, endDate) {
        await this.startDateInput.fill(startDate);
        await this.endDateInput.fill(endDate);

    }

    async submitDateRange() {
        await this.submitDateButton.click();
    }

}