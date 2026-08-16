import { Page, Locator } from '@playwright/test';
import {Homepage} from './Homepage';

export class Logout{

    //locators
    private readonly page:Page;
    private readonly btnContinue : Locator;

    //constructors

    constructor(page:Page){
        this.page = page;
        this.btnContinue = page.locator('.btn.btn-primary');
    }

    //Action methods
    /**
     * Clicks yje continue button after logout
     * @param >  returns:  Promise <homepage> - return instance of Homepage
     * **/
    async ClickContinue():Promise <Homepage>{
        await this.btnContinue.click();
        return new Homepage(this.page);
    }

    /**
     * Verifiy the Continue button is visible
     * @returns promise <boolean> - returns true if button is visible.
     * */
    async isContinueBtnVisible():Promise<boolean>{
        return await this.btnContinue.isVisible();
    }
}