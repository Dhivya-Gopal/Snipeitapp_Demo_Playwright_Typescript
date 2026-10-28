import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }
  async openApplication() {
    await this.page.goto("https://demo.snipeitapp.com/login");
  }
  async login(usernamevalue: string, passwordvalue: string) {
    await this.usernameInput.fill(usernamevalue);
    await this.passwordInput.fill(passwordvalue);
    await this.loginButton.click();
  }
}
