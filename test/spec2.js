'use strict';

describe ('some tests', () => {

    it(' should have word modify when modify task', () => {
        browser.click('#text1');
        expect(browser.getText('#titleTextView')).toEqual('modify')
    });

    it(' should rename task', () => {
        browser.setValue('#taskTitleEditText', 'New name');
        browser.hideDeviceKeyboard();
        browser.click('#saveTaskButton');
        expect(browser.getText('#text1')[0]).toEqual('New name')
    });

    it(' should add new task', () => {
        browser.click('#addTaskButton');
        browser.setValue('#taskTitleEditText', 'Some name');
        browser.hideDeviceKeyboard();
        browser.setValue('#taskDescriptionEditText', 'Some description');
        browser.hideDeviceKeyboard();
        browser.click('#saveTaskButton');
        expect(browser.getText('#text1')[3]).toEqual('Some name')
    });
});
