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
    instance = new SwaggerTynidesigner.InlineObject1();
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

  describe('InlineObject1', function() {
    it('should create an instance of InlineObject1', function() {
      // uncomment below and update the code to test InlineObject1
      //var instane = new SwaggerTynidesigner.InlineObject1();
      //expect(instance).to.be.a(SwaggerTynidesigner.InlineObject1);
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new SwaggerTynidesigner.InlineObject1();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new SwaggerTynidesigner.InlineObject1();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new SwaggerTynidesigner.InlineObject1();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new SwaggerTynidesigner.InlineObject1();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new SwaggerTynidesigner.InlineObject1();
      //expect(instance).to.be();
    });

    it('should have the property profile (base name: "profile")', function() {
      // uncomment below and update the code to test the property profile
      //var instane = new SwaggerTynidesigner.InlineObject1();
      //expect(instance).to.be();
    });

  });

}));
