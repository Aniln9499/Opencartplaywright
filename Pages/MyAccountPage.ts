import { Page, Locator} from '@playwright/test';
import {Logout} from '../Pages/LogoutPage'
//import { LogoutPage } from './LogoutPage';   //import logout class if needed

export class MyAccountPage{

    //Locators
    private readonly page : Page;
    private readonly msgHeading : Locator;
    private readonly lnkLogout : Locator;

    //Constructors

    constructor(page : Page){
        this.page = page;

        this.msgHeading = page.locator('h2:has-text("My Account")');
        this.lnkLogout = page.locator("text='Logout'").nth(1);

    }

    //Action Methods

    /** Verify if My Account page is displayed. 
     * 
     * */

    async isMyAccountPageExists(): Promise<boolean>{
        try{
            const isVisible = await this.msgHeading.isVisible();
            return isVisible;
        } catch(error) {
            console.log('Error Checking my account page heading visibility : ${error}');
            return false;
        }
    }

    async ClickLogout() : Promise <void>{
        try{
            await this.lnkLogout.click();
        } catch(error){
            console.log('Unbale to click on Logout link : ${error}');
            throw error;
        }
    }

    async getPageTitle():Promise<string>{
        return (await this.page.title());
    }
}