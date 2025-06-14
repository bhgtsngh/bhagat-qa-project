import { test } from '@playwright/test';
import { TotalPage } from '../pages/total.page';

test('Validate Dream Summary Stats and Recurring Dreams', async ({ page }) => {
  const summary = new TotalPage(page);
  await summary.goto();
  await summary.validateSummaryStats();
});