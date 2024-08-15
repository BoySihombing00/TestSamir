import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';

const pages = {
    login: LoginPage
}

Given(/^User on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^User input (.+) and (.+)$/, async (username, password) => {
    await LoginPage.input(username, password);
});

Then(/^User should see a flash message saying (.*)$/, async (message) => {
    const messages = await $(await LoginPage[message]).getText()
    console.log("message ", messages);
    if (message == 'Login_successful') {
        expect(messages).toEqual('Login successful')
    } else {
        expect(messages).toEqual('Invalid credentials')
    }

    //     expect(message).toEqual(messages)
    // }else{
    //     const messages =await  $(await SecurePage.flashAlertFailed).getText()
    //     console.log("message ",messages);

    //     expect(message).toEqual(messages)

    // }
    // await (await SecurePage.flashAlert).isDisplayed()

});

