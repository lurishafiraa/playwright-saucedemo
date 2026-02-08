import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async goToCheckout() {
    await this.page.click('[data-test="checkout"]');
  }
}
