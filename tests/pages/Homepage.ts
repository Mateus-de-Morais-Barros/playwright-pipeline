import { Page, Locator } from '@playwright/test';


export class Homepage {
    readonly page: Page;
    readonly titleLocator: Locator;
    
    constructor(page: Page) {
        this.page = page;

        this.titleLocator = page.getByText('Automation Practice')
    }

    async acessar() {
        await this.page.goto("https://ultimateqa.com/automation")
    }

}