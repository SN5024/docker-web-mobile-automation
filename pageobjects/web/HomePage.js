import { expect } from '@playwright/test';

export default class HomePage {
    constructor(page) {
        this.page = page;
        this.firstLink = page.locator('a').first();
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
}