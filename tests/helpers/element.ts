import {expect, Locator} from '@playwright/test';

export async function waitElement(selector: Locator): Promise<void> {
    await expect(selector).toBeVisible({timeout: 5000});
}

export async function fillField(selector: Locator, value: string): Promise<void> {
    await waitElement(selector);
    await selector.fill(value);
}