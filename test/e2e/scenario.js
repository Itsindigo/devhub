'use strict()';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Devhub App', function() {
  var searchBar = element(by.id('username'));
  var searchButton = element(by.id('search-btn'));

  beforeEach(function() {
    browser.get('/');
  });

  describe('homepage', function(){

    it("should have a title, search bar and button", function() {
      expect(element(by.id('title')).getText()).toBe('Devhub Search');
      expect(searchBar.isDisplayed());
      expect(searchButton.isDisplayed());
    });

    it("should display a user, when you search for one", function(){
      searchBar.sendKeys("alexavlonitis");
      searchButton.click();
      browser.waitForAngular();
      expect(element(by.binding('user.login')).getText()).toBe('AlexAvlonitis');
    });

  });



});
