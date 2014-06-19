'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  //browser.get('index.html');

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
      browser.get('#/contacts/1');
    });


    it('should render contacts when user navigates to contact detail page', function() {
      expect(element.all(by.css('h1')).first().getText()).
        toMatch(/Lonnie Jackson/);
    });

  });

/*

  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
  */
});
