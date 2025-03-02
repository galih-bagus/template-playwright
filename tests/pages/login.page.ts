import {Locator, Page} from '@playwright/test';

export const usernameField = (page: Page): Locator => page.locator(`//input[@data-test='username']`);

export const passwordField = (page: Page): Locator => page.locator(`//input[@data-test='password']`);