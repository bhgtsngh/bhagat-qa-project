import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto('https://arjitnigam.github.io/myDreams/', {
      waitUntil: 'load',
      timeout: 20000
    });
  }

  async waitForMainContainer() {
    await expect(this.page.locator('main.main-container')).toBeVisible({ timeout: 10000 });
  }

  async verifyMyDreamsButton() {
    await expect(this.page.getByText('MY DREAMS')).toBeVisible({ timeout: 10000 });
  }

  async clickMyDreams() {
    const [diaryPage, summaryPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.context().waitForEvent('page'),
      this.page.getByText('MY DREAMS').click(),
    ]);
    return { diaryPage, summaryPage };
  }
}