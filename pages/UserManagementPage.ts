// import { Page,Locator,expect } from "@playwright/test";


// export class UserManagementPage {
//     readonly page: Page;
//     readonly UsernameInput: Locator;
//     readonly UserRoleDropDown: Locator;
//     readonly EmployeeNameInput: Locator;
//     readonly StatusDropDown: Locator;
//     readonly SearchButton: Locator;

//     readonly AddButton: Locator;
//     readonly UserRoleDropDownInAddUser: Locator;
//     readonly EmployeeNameInputInAddUser: Locator;
//     readonly StatusDropDownInAddUser: Locator;
//     readonly UsernameInputInAddUser: Locator;
//     readonly PasswordInputInAddUser: Locator;
//     readonly ConfirmPasswordInputInAddUser: Locator;
//     readonly SaveButtonInAddUser: Locator;

//     constructor(page: Page) {
//         this.page = page;
//         this.UsernameInput = page.getByRole('textbox', { name: 'Username' });
//         this.UserRoleDropDown = page.getByRole('combobox', { name: 'User Role' });
//         this.EmployeeNameInput = page.getByRole('textbox', { name: 'Employee Name' });
//         this.StatusDropDown = page.getByRole('combobox', { name: 'Status' });
//         this.SearchButton = page.getByRole('button', { name: 'Search' });
//     }
   
//     async verifyHomepage() {
//         //await expect(this.DashboardText).toBeVisible(); 
//     }

//     async clickAdminLink() {
//         //await this.AdminLink.click();
//     }

// }   




