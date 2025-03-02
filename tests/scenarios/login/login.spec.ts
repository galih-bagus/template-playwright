import {test} from '@playwright/test';
import * as route from '../../helpers/routes';
import * as element from '../../helpers/element';
import * as loginPage from '../../pages/login.page';

test.describe('Saucedemo', () => {

    test.beforeEach(async ({page}) => {
        await route.url(page);
    });

    test('Login with invalid data', async () => {
        await element.fillField(loginPage.usernameField(), `asd`);
        await element.fillField(loginPage.passwordField(), `asd`);
    });
});
