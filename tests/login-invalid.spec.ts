import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login should fail with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('/');

  // Use invalid credentials
  await loginPage.login('invalid_user', 'wrong_password');

  // Assert error message is displayed
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText(
    'Username and password do not match'
  );
});