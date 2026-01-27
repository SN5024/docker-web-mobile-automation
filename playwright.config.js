import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
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