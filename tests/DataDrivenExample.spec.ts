import {test,expect} from '../fixtures/pom-fixtures';
import data1 from '../TestData/testdata1.json';

test('Sample1', async ({ page, loginPage}) => {
  
  await loginPage.goToOrangeHRM();
  await loginPage.login(data1.username, data1.password);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.waitForURL(process.env.BASE_URL + '/dashboard/index');
  
  
});

