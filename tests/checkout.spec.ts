import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('End-to-End checkout with correct total calculation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await page.goto('/');
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);

  // Add two items
  await productsPage.addFirstTwoItems();

  // Go to cart
  await page.click('.shopping_cart_link');
  await cartPage.goToCheckout();

  // Fill checkout information
  await checkoutPage.fillInfo();

  // Assertions on Overview page
  const itemTotal = await checkoutPage.getItemTotal();
  const tax = await checkoutPage.getTax();
  const total = await checkoutPage.getTotal();

  expect(itemTotal + tax).toBeCloseTo(total, 2);

  // Finish order
  await page.click('[data-test="finish"]');
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');
});