import {test} from '@playwright/test';
import * as route from '../../helpers/routes';
import * as element from '../../helpers/element';
import * as assertion from '../../helpers/assertion';
import * as loginPage from '../../pages/login.page';
import * as loginData from '../../datas/login.data';

test.describe('Saucedemo', () => {

    test.beforeEach(async ({page}) => {
        await route.url(page);
    });

    test('Login with invalid data', async ({page}) => {
        await element.fillField(loginPage.usernameField(page), loginData.INVALID_USER.username);
        await element.fillField(loginPage.passwordField(page), loginData.INVALID_USER.password);
        await element.clickButton(loginPage.buttonSubmit(page));
        await assertion.actualExpected(loginPage.errorMessage(page), `Epic sadface: Username and password do not match any user in this service`)
    });

    test('Login with valid data', async ({page}) => {
        await element.fillField(loginPage.usernameField(page), loginData.VALID_USER.username);
        await element.fillField(loginPage.passwordField(page), loginData.VALID_USER.password);
        await element.clickButton(loginPage.buttonSubmit(page));
        await assertion.actualExpected(loginPage.home(page), `Products`)
        await page.setDefaultTimeout(30000);
        await element.scrollNavigation(loginPage.homeFooter(page))
        await element.takeScreenShoot(loginPage.homeFooter(page), `footer`)
    });
});
