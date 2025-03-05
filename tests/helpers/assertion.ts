import {expect, Locator} from '@playwright/test';
import * as element from '../helpers/element';

export async function actualExpected(selector: Locator, expected: string) {
    await element.waitElement(selector)
    await expect(await element.getText(selector)).toEqual(expected);
}