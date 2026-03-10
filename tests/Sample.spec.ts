
import {test,expect} from '../fixtures/pom-fixtures';
import {envVars} from '../playwright.config';


test('basic test', async ({ page,loginPage}) => {
  
  await loginPage.goToOrangeHRM();
  await loginPage.login(envVars.username, envVars.password);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  
  await page.getByRole('textbox', { name: 'Username' }).first().fill('"dhaven"');
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'ESS' }).click();
  await page.getByText('Employee Name', { exact: true }).click();


  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByRole('option', { name: '-- Select --' }).click();
  await page.getByText('-- Select --').first().click();
  await page.getByText('-- Select --').first().click();
   
});









