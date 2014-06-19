'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

    it('should redirect index.html to index.html#/contacts', function() {
        browser.get('index.html');
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('#')[1]).toBe('/contacts');
        });
    });

    it('should automatically redirect to /contacts when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch("/contacts");
    });


    describe('ContactDetailView', function() {

        beforeEach(function() {
          browser.get('#/contacts/0');
        });

        it('should render contacts when user navigates to contact detail page', function() {
            expect(element.all(by.css('h1')).first().getText()).toMatch('');
        });

    });

    describe('AddContactView', function() {

        beforeEach(function() {
            browser.get('#/add');
        });

        it('should redirect to contact detail page after save', function() {
            element(by.model('nameBox')).sendKeys('Tom Smith');
            element(by.css('#saveBtn')).click();
            expect(browser.getLocationAbsUrl()).toMatch("#/contacts");
        });

    });
});
