import{Page, Expect, Locator} from '@playwright/test'

export class RegistrationPage{

    private readonly page: Page;

    //Locators using css selectors

    private readonly txtFirstname: Locator;
    private readonly txtLastname: Locator;
    private readonly txtEmail: Locator;
    private readonly txtTelephone: Locator;
    private readonly txtPassword: Locator;
    private readonly txtConfirmPassword: Locator;
    private readonly checkpolicy: Locator;
    private readonly btnContinue: Locator;
    private readonly msgConfirmation: Locator;

    //Constructors

    constructor(page : Page){

        this.page=page;

        //initialize locators with css selectors
        this.txtFirstname = page.locator('#input-firstname');
        this.txtLastname = page.locator('#input-lastname');
        this.txtEmail = page.locator('#input-email');
        this.txtTelephone = page.locator('#input-telephone');
        this.txtPassword = page.locator('#input-password');
        this.txtConfirmPassword = page.locator('#input-confirm');
        this.checkpolicy = page.locator('input[name="agree"]');
        this.btnContinue = page.locator('input[value="Continue"]');
        this.msgConfirmation = page.locator('h1:has-text("Your Account Has Been Created!")');
    }

    // Actions

    //Firstname set to Param

    async SetFirstName(fname: string): Promise<void> {
        await this.txtFirstname.fill(fname);
    }

     //LastName set to Param
     async SetLastName(Lname : string): Promise<void> {
        await this.txtLastname.fill(Lname);
     }

     //Email set to Param
     async SetEmail(email:string):Promise<void>{
        await this.txtEmail.fill(email);
     }
     // Telephone set to Param
     async SetTelephone(telephone: string):Promise<void>{
        await this.txtTelephone.fill(telephone);
     }
      //password set to Param
      async SetPassword(password: string):Promise<void>{
        await this.txtPassword.fill(password);
      }
       //COnf Password set to Param
    async SetConfPassword(ConfPassword:string):Promise<void>{
        await this.txtConfirmPassword.fill(ConfPassword)
    }

    //Check Privacy policy checkbox
    async SetPrivacyPolicy(): Promise<void>{
        await this.checkpolicy.click();
    }

    //check the Continue button
    async ClickContinue():Promise<void>{
        await this.btnContinue.click();
    }

    //Check Confirmation message
    async GetConfirmationmsg():Promise<string>{
        return (await this.msgConfirmation.textContent()) ??'';
    }

    //--Complete registration flow --

}