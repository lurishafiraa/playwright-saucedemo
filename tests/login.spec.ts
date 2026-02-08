
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login with valid credentials', async ({ page }) => {
  const login = new LoginPage(page);
  await page.goto('/');
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});
