// pageobjects/mobile-web/MobileHomePage.js
import { expect } from '@playwright/test';

export default class MobileHomePage {
    constructor(page) {
        this.page = page;
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.phoneInput = page.locator('#phone');
        this.addressInput = page.locator('#textarea');
        this.genderRadioButtons = page.locator('input[name="gender"]');
        this.dayCheckboxes = page.locator('input[name="day"]');
        this.countryDropdown = page.locator('#country');
        this.uploadInput = page.locator('#singleFileInput');
        this.uploadButton = page.locator('#singleFileForm button[type="submit"]');
        this.uploadSuccessMsg = page.locator('#singleFileStatus');
    }

    async navigate() {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }


    async fillName(name) {
        await this.nameInput.fill(name);
    }

    async uploadSingleFile(filePath) {
        await this.uploadInput.setInputFiles(filePath);
        await this.uploadButton.scrollIntoViewIfNeeded();
        // Explicit wait to allow layout to settle before clicking
        await this.page.waitForTimeout(300);
        await this.uploadButton.click({ force: true });
    }

    async verifySingleFileUploadSuccess() {
        const locator = this.uploadSuccessMsg;
        await locator.waitFor({ state: 'visible', timeout: 5000 }).catch(() => null);
        return locator;
    }
}