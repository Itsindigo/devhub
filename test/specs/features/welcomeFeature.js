"use strict";

var chai = require('chai');
var expect = chai.expect;
var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

describe("anything", function(){
  it("is a test", function(){
  
  });
});
