/**
 *  Test Case: Account registration
 * 
 * Tags: @master @Sanity @Regression
 * 
 * Steps:
 * 1.Navigate to the Application URL
 * 2.Go to 'My Account' and click on 'Register'
 * 3.Fill the registration details with random data
 * 4.Agree to privecy policy and submit the form
 * 5.Validate the confirmation message
 * 
 */

// import all required class

import {test, expect} from '@playwright/test';
import {Homepage} from '../Pages/Homepage';
import {RegistrationPage} from '../Pages/RegistrationPage';
import {RandomDataUtill} from '../utilis/randomDataGenerators';
import {TestConfig} from '../test.config';

// create global veriable

let homepage : Homepage;
let registrationPage : RegistrationPage;
let config : TestConfig;

//HOOKS are required for before and after test run

test.beforeEach (async({page})=> {

   config = new TestConfig();  //create a veribale so we can use any time
   await page.goto(config.appUrl);  //Navigate to the App url

   homepage = new Homepage(page);  // creating object to homepage to all action methods

   registrationPage = new RegistrationPage(page); // Creating object to Registration page class

})

test.afterEach (async({page})=>{

   await page.close();
})

test('User Registration test @master @sanity @regression', async({page})=>{   
   //async({page}) > here just pass async() => { } > bucz >page is we are not using. so no need to mention.

   //Click on "My Account" and 'Register'
  
   //(page) we need to pass page, buz whenever we need to call pageclass object.
   await homepage.ClickMyAccount();
   await homepage.ClickRegister();

   
   await registrationPage.SetFirstName(RandomDataUtill.getFirstName());
   await registrationPage.SetLastName(RandomDataUtill.getLastName());
   await registrationPage.SetEmail(RandomDataUtill.getEmail());
   await registrationPage.SetTelephone(RandomDataUtill.getPhoneNumber());

   // Password we need enter same for Confirm Password
  
   const Password = RandomDataUtill.getPassword();
   await registrationPage.SetPassword(Password);
   await registrationPage.SetConfPassword(Password);

   await registrationPage.SetPrivacyPolicy();
   await registrationPage.ClickContinue();

   //Validate the confirmation message
   const confirmationmessage = await registrationPage.GetConfirmationmsg();
   expect(confirmationmessage).toContain('Your Account Has Been Created!')

   await page.waitForTimeout(3000);

})



