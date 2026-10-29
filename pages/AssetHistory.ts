import { Page, Locator, expect } from "@playwright/test";
export class AssetHistory {
  readonly page: Page;
  readonly HistoryItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.HistoryItem = page
      .locator('#assetHistoryListingTable tbody tr td a[href*="/hardware/"]')
      .nth(1);
  }

  async getHistoryAssetNumber(): Promise<string> {
    await expect(this.HistoryItem).toBeVisible();
    const historyItemText = await this.HistoryItem.innerText();
    const assetNumber = historyItemText.match(/#(\d+)/)?.[1];
    if (!assetNumber) {
      throw new Error("Asset number not found in History");
    }
    return assetNumber;
  }
}
