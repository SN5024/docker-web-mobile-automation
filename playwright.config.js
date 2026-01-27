// playwright.config.js

import { defineConfig, devices } from '@playwright/test';
import env from './env.config.js';

export default defineConfig({
  globalSetup: './global-setup.js',
  testDir: './tests',
  timeout: 30 * 1000,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    baseURL: env.baseURL,
  },
  projects: [ // Define projects for different browsers and devices, to not combine 
    // mobile and web tests in same project
    {
      name: 'Desktop Chromium',
      use: { browserName: 'chromium', viewport: { width: 1280, height: 720 } },
      testMatch: /tests\/web\/.*\.spec\.js/,
    },
    {
      name: 'Desktop Firefox',
      use: { browserName: 'firefox', viewport: { width: 1280, height: 720 } },
      testMatch: /tests\/web\/.*\.spec\.js/,
    },
    {
      name: 'iPhone 12 - WebKit',
      use: { ...devices['iPhone 12'], browserName: 'webkit' },
      testMatch: /tests\/mobile-web\/.*\.spec\.js/,
    },
    {
      name: 'Pixel 5 - Chromium',
      use: { ...devices['Pixel 5'], browserName: 'chromium' },
      testMatch: /tests\/mobile-web\/.*\.spec\.js/,
    },
  ],
});