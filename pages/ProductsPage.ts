import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async addFirstTwoItems() {
    const buttons = this.page.locator('.inventory_item button');
    await buttons.nth(0).click();
    await buttons.nth(1).click();
  }

  async sortHighToLow() {
    await this.page.selectOption('.product_sort_container', 'hilo');
  }

  async getFirstItemPrice(): Promise<number> {
    const priceText = await this.page
      .locator('.inventory_item_price')
      .first()
      .innerText();

    return Number(priceText.replace('$', ''));
  }
}