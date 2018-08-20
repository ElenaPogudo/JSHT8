'use strict';

describe ('some tests', () => {

    it(' should have sign in and create account buttons on the tart screen', () => {
        browser.pause(20000);
        expect(browser.getText('#sign_in'))[0].toEqual('Sign In');
        expect(browser.getText('#create_account')[0]).toEqual('Create Account');
        browser.click('#sign_in');
    });

    it(' should open log in page and logging in', () => {
        browser.pause(20000);
        expect(browser.getText('#title')).toEqual('USER LOGIN');
        browser.setValue('#username', 'elenapogudo@protonmail.com');
        browser.pause(5000);
        browser.setValue('#password', '123456789');
        browser.hideDeviceKeyboard();
        browser.click('#sign_in');
    });

    it(' should have one letter inbox', () => {
        browser.pause(20000);
        expect(browser.getText('#message_title')).toEqual('Welcome to ProtonMail! Learn about your encrypted inbox');
    });

    it(' should open letter', () => {
        browser.pause(20000);
      browser.click('#message_title');
        expect(browser.getText('#message_title')).toEqual('Welcome to ProtonMail! Learn about your encrypted inbox');
    });
});
