import { Page, Locator } from "@playwright/test";
export class AssetDetail {
  readonly page: Page;
  readonly assetTag: Locator;
  readonly historyTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.assetTag = page.locator("(//span[@class='js-copy-asset_tag'])[1]");
    this.historyTab = page.locator("//a[@href='#history']");
  }

  async getAssetTagValue() {
    await this.page.waitForTimeout(3000);
    const assetTagValue = (await this.assetTag.innerText()).trim();
    return assetTagValue;
  }

  async clickHistoryTab() {
    await this.historyTab.click();
  }
}
