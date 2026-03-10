
import {test,expect} from '../fixtures/pom-fixtures';
import {envVars} from '../playwright.config';


test('basic test', async ({ page,loginPage}) => {
  
  await loginPage.goToOrangeHRM();
  await loginPage.login(envVars.username, envVars.password);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.waitForURL(envVars.baseURL + '/dashboard/index');
   
});









