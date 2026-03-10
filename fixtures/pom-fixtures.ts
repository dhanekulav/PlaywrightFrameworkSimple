import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

type PomFixtureTypes = {
    loginPage: LoginPage;
    homePage: HomePage;
}

export const test = baseTest.extend<PomFixtureTypes>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    }           
    }
 );

 export {expect} from '@playwright/test';


