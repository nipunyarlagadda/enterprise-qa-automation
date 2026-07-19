import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import users from "../test-data/users.json";

test("Locked user should not be able to login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(users.lockedUser.username, users.lockedUser.password);

  const errorMessage = await loginPage.getErrorMessage();

  await expect(errorMessage).toContain("Sorry, this user has been locked out.");
});
