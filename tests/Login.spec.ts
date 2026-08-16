
/**
 * Test case : Login with Valid Credentials:
 * Tags: @param @sanity @Regression
 * 
 * steps:
 * 1.Naivgate to app URL
 * 2.Click on My Account > Click on Login
 * 3.Enter Valid creds and click on Login
 * 4.Verify the successful login by checking "My Account" page
 */

import { test, expect} from '@playwright/test';
import {Homepage} from '../Pages/Homepage';
import {loginPage} from '../Pages/loginPage'
import {MyAccountPage} from '../Pages/MyAccountPage';
import {TestConfig} from '../test.config';

let config : TestConfig;
let homepage : Homepage;
let Loginpage : loginPage;
let MyAccountpage : MyAccountPage;

// create a hooks to run before each test

test.beforeEach( async ({page})=> {

    config = new TestConfig();
    await page.goto(config.appUrl); // navigating to url

    homepage = new Homepage(page);
    Loginpage = new loginPage(page);
    MyAccountpage = new MyAccountPage(page);
});

//Optional cleanup after each test
test.afterEach(async ({page})=>{

    await page.close();
})

test('User Login Test @master @sanity @regression', async()=>{

    await homepage.ClickMyAccount();
    await homepage.ClickLogin();

    //Enter Valid creds to login

    await Loginpage.SetEmail(config.email);
    await Loginpage.SetPassword(config.password);
    await Loginpage.ClickLogin();

    //or Alternativly  -- No need to click on login button 
   // await Loginpage.login(config.email, config.password);

   const isLoggedin = await MyAccountpage.isMyAccountPageExists();
   expect(isLoggedin).toBeTruthy();

})





