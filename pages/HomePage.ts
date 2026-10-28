import { Page, Locator } from "@playwright/test";
export class HomePage {
  readonly page: Page;
  readonly createNewDropDown: Locator;
  readonly assertOption: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createNewDropDown = page.getByText("Create New", { exact: true });
    this.assertOption = page.getByText("Asset", { exact: true });
  }
  async clickCreateNewDropDown() {
    await this.createNewDropDown.click({ timeout: 30000 });
  }
  async clickAssertOption() {
    await this.assertOption.click({ timeout: 30000 });
  }
}
