import { Page, Locator } from "@playwright/test";

export class SuccessNotificatiocnInAssetList {
  readonly page: Page;
  readonly successMessage: Locator;
  readonly clickHereToView: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successMessage = page.locator("#success-notification");
    this.clickHereToView = page.getByRole("link", {
      name: "Click here to view",
    });
  }

  async getSuccessNotificationText() {
    await this.page.waitForTimeout(3000);
    const notificationText = (await this.successMessage.innerText()).trim();
    return notificationText;
  }

  async clickClickHereToView() {
    await this.clickHereToView.click();
  }
}
