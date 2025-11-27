import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("renders and counter increments", async ({ page }) => {
    await page.goto("http://localhost:3000");

    // Check heading text
    await expect(page.locator("#title")).toHaveText("Playwright Test Page");

    // Check initial counter and increment
    await expect(page.locator("#count")).toHaveText("0");
    await page.click("#increment");
    await expect(page.locator("#count")).toHaveText("1");

    // Check about link target
    await expect(page.locator("#about-link")).toHaveAttribute("href", "/about");
  });
});
