/**
 * Swagger Tynidesigner
 * Tynidesigner Api Specification.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerTynidesigner);
  }
}(this, function(expect, SwaggerTynidesigner) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerTynidesigner.UserMeDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserMeDto', function() {
    it('should create an instance of UserMeDto', function() {
      // uncomment below and update the code to test UserMeDto
      //var instane = new SwaggerTynidesigner.UserMeDto();
      //expect(instance).to.be.a(SwaggerTynidesigner.UserMeDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SwaggerTynidesigner.UserMeDto();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new SwaggerTynidesigner.UserMeDto();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new SwaggerTynidesigner.UserMeDto();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new SwaggerTynidesigner.UserMeDto();
      //expect(instance).to.be();
    });

    it('should have the property nickname (base name: "nickname")', function() {
      // uncomment below and update the code to test the property nickname
      //var instane = new SwaggerTynidesigner.UserMeDto();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new SwaggerTynidesigner.UserMeDto();
      //expect(instance).to.be();
    });

    it('should have the property profile (base name: "profile")', function() {
      // uncomment below and update the code to test the property profile
      //var instane = new SwaggerTynidesigner.UserMeDto();
      //expect(instance).to.be();
    });

    it('should have the property emailVerified (base name: "email_verified")', function() {
      // uncomment below and update the code to test the property emailVerified
      //var instane = new SwaggerTynidesigner.UserMeDto();
      //expect(instance).to.be();
    });

    it('should have the property phoneVerified (base name: "phone_verified")', function() {
      // uncomment below and update the code to test the property phoneVerified
      //var instane = new SwaggerTynidesigner.UserMeDto();
      //expect(instance).to.be();
    });

  });

}));
