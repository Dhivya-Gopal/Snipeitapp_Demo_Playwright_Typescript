import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CreateNewAssets } from "../pages/CreateNewAssets";
import { SuccessNotificatiocnInAssetList } from "../pages/SuccessNotificationInAssetList";
import { AssetDetail } from "../pages/AssetDetail";
test("Create a new asset and checkout to a user", async ({ page }) => {
  const loginPageobj = new LoginPage(page);

  await loginPageobj.openApplication();
  await loginPageobj.login("admin", "password");

  const homePageobj = new HomePage(page);
  await page.waitForLoadState("networkidle");
  await homePageobj.clickCreateNewDropDown();
  await homePageobj.clickAssertOption();

  const createNewAssetsobj = new CreateNewAssets(page);
  await page.waitForLoadState("networkidle");

  await createNewAssetsobj.selectCompany();
  const selectedCompany1 = await createNewAssetsobj.companyvalue();
  console.log("Selected Company: ", selectedCompany1);

  await createNewAssetsobj.captureAssetTag();
  const assetTagValue1 = await createNewAssetsobj.captureAssetTag();
  console.log("Captured Asset Tag: ", assetTagValue1);

  await createNewAssetsobj.selectModel();
  const selectedModel1 = await createNewAssetsobj.modelvalue();
  console.log("Selected Model: ", selectedModel1);

  await createNewAssetsobj.selectStatus();
  const selectedStatus1 = await createNewAssetsobj.statusvalue();
  console.log("Selected Status: ", selectedStatus1);

  await createNewAssetsobj.selectUser();
  const selectedUser1 = await createNewAssetsobj.uservalue();
  console.log("Selected User: ", selectedUser1);

  await createNewAssetsobj.clickOrderRelatedInfo();

  await createNewAssetsobj.fillPurchaseCost("2220");

  await createNewAssetsobj.purchaseCostvalue();
  const purchaseCost1 = await createNewAssetsobj.purchaseCostvalue();
  console.log("Purchase Cost: ", purchaseCost1);

  await page.pause();
  await createNewAssetsobj.clickSaveButton();
  await page.pause();

  await page.waitForLoadState("networkidle");
  const successNotificationobj = new SuccessNotificatiocnInAssetList(page);
  const notificationText1 =
    await successNotificationobj.getSuccessNotificationText();
  console.log("Success Notification Text: ", notificationText1);

  await successNotificationobj.clickClickHereToView();

  await page.waitForLoadState("networkidle");
  const assetDetailobj = new AssetDetail(page);
  const assetTagValue2 = await assetDetailobj.getAssetTagValue();
  expect(assetTagValue2).toBe(assetTagValue1);
  console.log("Asset Tag Value in Asset Detail Page: ", assetTagValue2);

  await assetDetailobj.clickHistoryTab();
});
