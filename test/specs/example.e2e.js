import HomePage from "../pageobjects/home.page";
import SecurePage from "../pageobjects/secure.page.js";
import NextPage from "../pageobjects/next.page";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await HomePage.open();
    await HomePage.login("valid_name", "53", "163", true);
    await expect(SecurePage.flashAlert).toBeExisting();
    await NextPage.open();
  });
});
