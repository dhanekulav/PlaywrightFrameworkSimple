
import {test,expect} from '../fixtures/pom-fixtures';
import { readExcelData } from '../utility/ExcelUtils';
import path from 'node:path';

const filePath = path.resolve(__dirname, '../TestData\\TestData1.xlsx');
const testData = readExcelData(filePath, 'Credentials');


test('Login test for user:', async ({ page, loginPage }) => {
  for (const data of testData) {  
    await loginPage.goToOrangeHRM();
    await loginPage.login(data.UserName, data.Password);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  }
});




