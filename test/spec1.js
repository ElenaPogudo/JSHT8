'use strict';

describe('just simple tests.',()=>{

    it('Should open homepage', ()=>{
        browser.get('http://www.epam.com/about');
        expect(browser.getTitle()).toEqual('About');
    });

    it('Should open `what we do` page', ()=>{
        browser.findElement(by.css('button.hamburger-menu__button')).click();
        browser.findElement(by.css('a.hamburger-menu__link')).click();
        expect(browser.getTitle()).toEqual('What We Do');
    })
});