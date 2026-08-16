
import { Page, Locator } from '@playwright/test';

export class loginPage {

    private readonly page : Page;
    //Locators

    private readonly txtEmailAddress: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly txtErrorMsg: Locator;

    //Constructors
    constructor(page:Page){

    this.page = page;

    this.txtEmailAddress = page.locator('#input-email');
    this.txtPassword = page.locator('#input-password'); 
    this.btnLogin = page.locator('input[value="Login"]');
    this.txtErrorMsg = page.locator('.alert.alert-danger.alert-dismissible');
    }

    //Action Methods

    /** Sets the email address in the email ID
     * @params email =- email address to enter
     * */

    async SetEmail(email:string){
        await this.txtEmailAddress.fill(email);
    }

    async SetPassword(password :string){
        await this.txtPassword.fill(password);
    }

    async ClickLogin(){
        await this.btnLogin.click();
    }

    /**
     * performs complete login action
     * @param email - email address to enter
     * @param password - password to enter
     * //Login to beloe method all 2 actions methods
     */

    async login(email:string, password:string){

        await this.SetEmail(email);
        await this.SetPassword(password);
        await this.ClickLogin();
    }

    async getloginErrormsg(): Promise<null |string> {
        return (await this.txtErrorMsg.textContent());
    }

}