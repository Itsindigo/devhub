'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Devhub App', function() {

  beforeEach(function() {
    browser.get('/');
  });

  it ("should have a user displayed on the first page", function() {
    var allUsers = element.all(by.repeater('user in users'));
    expect(allUsers.count).not.toBe(0);
    expect(element(by.id('.user_name')));
  });

  it("should have a search bar", function() {
    expect(element(by.id('title')).isDisplayed());
  });

});
