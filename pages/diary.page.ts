import { Page, expect } from '@playwright/test';

export class DiaryPage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto('https://arjitnigam.github.io/myDreams/dreams-diary.html', {
      waitUntil: 'load',
      timeout: 20000,
    });
  }

  async getDreamRows() {
    await this.page.waitForSelector('table tbody tr', { timeout: 10000 });

    const rows = this.page.locator('table tbody tr');
    await expect(rows).toHaveCount(10);

    const dreams: { name: string; type: string }[] = [];

    for (let i = 0; i < 10; i++) {
      const row = rows.nth(i);
      const name = await row.locator('td').nth(0).textContent();
      const type = await row.locator('td').nth(2).textContent();

      expect(name).not.toBeNull();
      expect(type).toMatch(/Good|Bad/);

      dreams.push({ name: name!.trim(), type: type!.trim() });
    }

    return dreams;
  }
}