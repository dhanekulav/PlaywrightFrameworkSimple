import { Page,Locator,expect } from "@playwright/test";


export class HomePage {
    readonly page: Page;
    readonly DashboardText: Locator;
    readonly AdminLink: Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.DashboardText = page.getByRole('heading', { name: 'Dashboard' });
        this.AdminLink = page.getByRole('link', { name: 'Admin' });
    }
   
    async verifyHomepage() {
        await expect(this.DashboardText).toBeVisible(); 
    }

    async clickAdminLink() {
        await this.AdminLink.click();
    }

}   
