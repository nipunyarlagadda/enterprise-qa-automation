// import { test, expect } from "@playwright/test";
// import { LoginPage } from "../pages/LoginPage";

// test("Successful user login", async ({ page }) => {
//   const loginPage = new LoginPage(page);

//   await loginPage.goto();

//   await loginPage.login("standard_user", "secret_sauce");

//   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
// });
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import users from "../test-data/users.json";

test("Successful user login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(users.validUser.username, users.validUser.password);

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
