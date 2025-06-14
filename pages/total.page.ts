import { Page, expect } from '@playwright/test';

export class TotalPage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto('https://arjitnigam.github.io/myDreams/dreams-total.html', {
      waitUntil: 'load',
      timeout: 20000,
    });
  }

  async validateSummaryStats() {
    await this.page.waitForSelector('table', { timeout: 10000 });

    const rows = this.page.locator('table tbody tr');

    const expected = {
      'Good Dreams': '6',
      'Bad Dreams': '4',
      'Total Dreams': '10',
      'Recurring Dreams': '2',
    };

    for (let i = 0; i < await rows.count(); i++) {
      const row = rows.nth(i);
      const firstCell = row.locator('td').nth(0);
      const secondCell = row.locator('td').nth(1);

      if (!(await firstCell.isVisible())) continue;

      const label = (await firstCell.textContent())?.trim();
      const value = (await secondCell.textContent())?.trim();

      if (label && expected[label]) {
        expect(value).toBe(expected[label]);
      }
    }
  }
}