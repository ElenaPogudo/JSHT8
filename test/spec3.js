'use strict';

describe ('some tests', () => {

    it(' should have sign in and create account buttons on the tart screen', () => {
        expect(browser.getText('#sign_in')).toEqual('Sign In');
        expect(browser.getText('#create_account')[0]).toEqual('Create Account');
        browser.click('#sign_in');
    });

    it(' should open log in page and logging in', () => {
        expect(browser.getText('#title')).toEqual('USER LOGIN');
        browser.setValue('#username', 'elenapogudo@protonmail.com');
        browser.setValue('#password', '123456789');
        browser.hideDeviceKeyboard();
        browser.click('#sign_in');
        browser.sleep(30000);
    });

    it(' should have one letter inbox', () => {
        expect(browser.getText('#message_title')).toEqual('Welcome to ProtonMail! Learn about your encrypted inbox');
    });

    it(' should open letter', () => {
      browser.click('#message_title');
        expect(browser.getText('#message_title')).toEqual('Welcome to ProtonMail! Learn about your encrypted inbox');
    });
});
