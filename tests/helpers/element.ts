import {expect, Locator} from '@playwright/test';

export async function waitElement(selector: Locator): Promise<void> {
    await expect(selector).toBeVisible({timeout: 5000});
}

export async function fillField(selector: Locator, value: string): Promise<void> {
    await waitElement(selector);
    await selector.fill(value);
    await expect(await selector.inputValue()).toEqual(value)
}

export async function clickButton(selector: Locator): Promise<void> {
    await waitElement(selector);
    await selector.click();
}

export async function getText(selector: Locator): Promise<string | null> {
    await waitElement(selector);
    return await selector.textContent();
}

export async function scrollNavigation(selector: Locator): Promise<void> {
    await waitElement(selector);
    await selector.scrollIntoViewIfNeeded()
    // await selector.scrollIntoViewIfNeeded();
    // await page.evaluate((selector) => {
    //     document.querySelector(selector)?.scrollIntoView({behavior: 'smooth', block: 'center'});
    // }, '#element-selector');
}

export async function takeScreenShoot(selector: Locator, nameFile: string) {
    await selector.screenshot({path: `test-screenshot/${nameFile}.png`});
}