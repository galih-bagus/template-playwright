import {Locator, Page} from '@playwright/test';

export const usernameField = (page: Page): Locator => page.locator(`//input[@data-test='username']`);
export const passwordField = (page: Page): Locator => page.locator(`//input[@data-test='password']`);
export const buttonSubmit = (page: Page): Locator => page.locator(`//input[@data-test='login-button']`);
export const errorMessage = (page: Page): Locator => page.locator(`//h3[@data-test='error']`);
export const home = (page: Page): Locator => page.locator(`//span[@data-test='title']`);
export const homeFooter = (page: Page): Locator => page.locator(`//div[@data-test='footer-copy']`);