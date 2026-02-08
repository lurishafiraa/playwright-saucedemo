import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Sort products by price high to low', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // Login
  await page.goto('/');
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);

  // Apply sorting
  await productsPage.sortHighToLow();

  // Validate first item is the most expensive
  const firstPrice = await productsPage.getFirstItemPrice();

  const allPrices = await page.locator('.inventory_item_price').allInnerTexts();
  const numericPrices = allPrices.map(p => Number(p.replace('$', '')));

  const maxPrice = Math.max(...numericPrices);

  expect(firstPrice).toBe(maxPrice);
});