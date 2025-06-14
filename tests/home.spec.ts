import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('Dream Portal Home Page (POM version)', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await home.waitForMainContainer();
  await home.verifyMyDreamsButton();
  await home.clickMyDreams(); // Optional: comment this out if you're not ready to test new tabs
});