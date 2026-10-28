import { Page, Locator } from "@playwright/test";
export class CreateNewAssets {
  readonly page: Page;
  readonly companyDropdown: Locator;
  readonly companyDropdownOption: Locator;
  readonly choosencompany: Locator;
  readonly assetTag: Locator;
  readonly modelDropdown: Locator;
  readonly modelDropdownOption: Locator;
  readonly choosenmodel: Locator;
  readonly statusDropdown: Locator;
  readonly statusDropdownOption: Locator;
  readonly choosenstatus: Locator;
  readonly userDropdown: Locator;
  readonly userDropdownOption: Locator;
  readonly choosenuser: Locator;
  // readonly locationDropdown: Locator;
  // readonly locationDropdownOption: Locator;
  //readonly choosenlocation: Locator;
  readonly orderRelatedInfo: Locator;
  readonly purchaseCostInput: Locator;
  readonly readPurchaseCost: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.companyDropdown = page.getByText("Select Company");
    this.companyDropdownOption = page
      .locator("#select2-company_id_select-results")
      .getByRole("option")
      .nth(4);
    this.choosencompany = page.locator("#select2-company_id_select-container");

    this.assetTag = page.locator("#asset_tag");

    this.modelDropdown = page.getByText("Select a Model");
    this.modelDropdownOption = page
      .locator("#select2-model_select_id-results")
      .getByText("Laptops - Macbook Pro 13");
    this.choosenmodel = page.locator("#select2-model_select_id-container");

    this.statusDropdown = page.getByLabel("Select Status");
    this.statusDropdownOption = page.getByRole("option", {
      name: "Ready to Deploy",
    });
    this.choosenstatus = page.locator("#select2-status_select_id-container");

    this.userDropdown = page.locator(
      "//span[contains(text(),'Select a User')]",
    );
    this.userDropdownOption = page
      .locator("#select2-assigned_user_select-results")
      .getByRole("option")
      .nth(7);
    this.choosenuser = page.locator("#select2-assigned_user_select-container");

    /*this.locationDropdown = page
      .locator("#select2-location_id_location_select-container")
      .getByText("Select a Location");

    this.locationDropdownOption = page
      .locator("#select2-location_id_location_select-results")
      .getByRole("option")
      .nth(4);
    this.choosenlocation = page.locator(
      "#select2-location_id_location_select-container",
    ); */

    this.orderRelatedInfo = page.getByText("Order Related Information");

    this.purchaseCostInput = page.locator("#purchase_cost");
    this.readPurchaseCost = page.locator("input[name='purchase_cost']");

    this.saveButton = page.getByRole("button", { name: "Save" }).first();
  }

  async selectCompany() {
    await this.companyDropdown.click();
    await this.companyDropdownOption.click();
  }
  async companyvalue() {
    await this.page.waitForTimeout(3000);
    const selectedCompany = (await this.choosencompany.innerText()).trim();
    return selectedCompany;
  }

  async captureAssetTag() {
    await this.page.waitForTimeout(3000);
    const assetTagValue = (await this.assetTag.inputValue()).trim();
    return assetTagValue;
  }

  async selectModel() {
    await this.modelDropdown.click();
    await this.modelDropdownOption.click({ timeout: 30000 });
  }
  async modelvalue() {
    await this.page.waitForTimeout(3000);
    const selectedModel = (await this.choosenmodel.innerText()).trim();
    return selectedModel;
  }

  async selectStatus() {
    await this.statusDropdown.click();
    await this.statusDropdownOption.click();
  }
  async statusvalue() {
    await this.page.waitForTimeout(3000);
    const selectedStatus = (await this.choosenstatus.innerText()).trim();
    return selectedStatus;
  }

  async selectUser() {
    await this.userDropdown.click();
    await this.userDropdownOption.click();
  }
  async uservalue() {
    await this.page.waitForTimeout(3000);
    const selectedUser = (await this.choosenuser.innerText()).trim();
    return selectedUser;
  }

  /* async selectLocation() {
    await this.locationDropdown.click({ timeout: 30000 });
    await this.locationDropdownOption.click({ timeout: 30000 });
  }
  async locationvalue() {
    //await this.page.waitForTimeout(3000);
    const selectedLocation = (await this.choosenlocation.innerText()).trim();
    return selectedLocation;
  } */

  async clickOrderRelatedInfo() {
    await this.orderRelatedInfo.click({ timeout: 30000 });
  }

  async fillPurchaseCost(cost: string) {
    await this.purchaseCostInput.click();
    await this.purchaseCostInput.fill(cost);
  }
  async purchaseCostvalue() {
    //await this.page.waitForTimeout(3000);
    const inputPurchaseCost = await this.readPurchaseCost.inputValue();
    return inputPurchaseCost;
  }

  async clickSaveButton() {
    await this.saveButton.click();
  }
}
