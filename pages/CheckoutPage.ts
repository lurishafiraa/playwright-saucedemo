import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInfo() {
    await this.page.fill('[data-test="firstName"]', 'John');
    await this.page.fill('[data-test="lastName"]', 'Doe');
    await this.page.fill('[data-test="postalCode"]', '12345');
    await this.page.click('[data-test="continue"]');
  }

  async getItemTotal(): Promise<number> {
    const text = await this.page
      .locator('.summary_subtotal_label')
      .innerText();

    return Number(text.replace('Item total: $', ''));
  }

  async getTax(): Promise<number> {
    const text = await this.page
      .locator('.summary_tax_label')
      .innerText();

    return Number(text.replace('Tax: $', ''));
  }

  async getTotal(): Promise<number> {
    const text = await this.page
      .locator('.summary_total_label')
      .innerText();

    return Number(text.replace('Total: $', ''));
  }
}