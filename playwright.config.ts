import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // 👈 Headed Chromium
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
  },
  reporter: [['list'], ['allure-playwright']], // 👈 Allure reporting
  timeout: 60000,

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
