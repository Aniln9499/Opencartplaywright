import {Page, expect, Locator } from '@playwright/test';

export class Homepage{

    private readonly page: Page;
    //locators
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly txtSearchbox: Locator;
    private readonly btnSearch: Locator;
    
    //Constructors

    constructor(page:Page){

        this.page = page;
        this.lnkMyAccount = page.locator('span:has-text("My Account")');
        this.lnkRegister = page.locator('a:has-text("Register")');
        this.lnkLogin = page.locator('a:has-text("Login")');
        this.txtSearchbox = page.locator('input[placeholder="Search"]');
        this.btnSearch = page.locator('#search button[type="button"]');
    }

    //Action Methods

    // check if home page is exists

    async isHomePageExists(){
        let title:String = await this.page.title();
        if(title){
            return true;
        }
        return false;
    }

    // Click on My Account
    async ClickMyAccount(){
        try{
            await this.lnkMyAccount.click();
        } catch(error) {
            console.log('Exception occurred while clicking "My Account": ${error}');
            throw error;
        }
    }

    //Click on "Register" link
    async ClickRegister(){
        try{
            await this.lnkRegister.click();
        } catch(error) {
            console.log('Exception occurred while clicking "Registrer": ${error}');
                throw error;
        }
    }

    //Click "Login" Link
    async ClickLogin(){
        try{
             await this.lnkLogin.click();
        } catch(error){
            console.log('Exception occurred while clicking "Login": ${error}');
            throw error;
        }
    }

    //Enter the product name in the search box

    async enterProductName(){
        try{
            await this.txtSearchbox.fill('pName');
        }catch(error){
            console.log('Exception occurred while entering product name: ${error}');
            throw error;
        }
    }

    //Click on Search button

    async ClickSearch(){
        try{
            await this.btnSearch.click();
        }catch(error){
            console.log('Exception occurred while click "Search": ${error}');
            throw error;
        }
    }

}