// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './test',             // Folder containing your tests
  timeout: 30 * 1000,            // Max 30s per test
  expect: {
    timeout: 5000,               // 5s for expect assertions
  },

  fullyParallel: true,           // Run tests in parallel
  forbidOnly: !!process.env.CI,  // Prevent accidental test.only in CI
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,

  // ✅ Report will be saved but not auto-opened
  reporter: [
    ['list'], 
    ['html', { open: 'never' }]
  ],

  use: {
    baseURL: 'http://localhost:3000', 
    headless: false,                 // Show browser UI
    actionTimeout: 0,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      slowMo: 1000,                  // 👈 1s delay between steps
    },
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment if needed:
    // { name: 'Firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'WebKit',  use: { ...devices['Desktop Safari'] } },
  ],
});

