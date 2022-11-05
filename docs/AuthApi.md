# SwaggerTynidesigner.AuthApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authLogoutPost**](AuthApi.md#authLogoutPost) | **POST** /auth/logout | Logout
[**authMeGet**](AuthApi.md#authMeGet) | **GET** /auth/me | GetMe
[**authMePointGet**](AuthApi.md#authMePointGet) | **GET** /auth/me/point | GetMePoint
[**authSigninPost**](AuthApi.md#authSigninPost) | **POST** /auth/signin | Signin
[**authSignupPost**](AuthApi.md#authSignupPost) | **POST** /auth/signup | Signup



## authLogoutPost

> Object authLogoutPost()

Logout

### Example

```javascript
import SwaggerTynidesigner from 'swagger_tynidesigner';

let apiInstance = new SwaggerTynidesigner.AuthApi();
apiInstance.authLogoutPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authMeGet

> Object authMeGet()

GetMe

Get User Me Api

### Example

```javascript
import SwaggerTynidesigner from 'swagger_tynidesigner';
let defaultClient = SwaggerTynidesigner.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new SwaggerTynidesigner.AuthApi();
apiInstance.authMeGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authMePointGet

> Object authMePointGet()

GetMePoint

Get Me Point Api

### Example

```javascript
import SwaggerTynidesigner from 'swagger_tynidesigner';
let defaultClient = SwaggerTynidesigner.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new SwaggerTynidesigner.AuthApi();
apiInstance.authMePointGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authSigninPost

> Object authSigninPost(opts)

Signin

Signin User Api

### Example

```javascript
import SwaggerTynidesigner from 'swagger_tynidesigner';

let apiInstance = new SwaggerTynidesigner.AuthApi();
let opts = {
  'inlineObject': new SwaggerTynidesigner.InlineObject() // InlineObject | 
};
apiInstance.authSigninPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authSignupPost

> Object authSignupPost(opts)

Signup

### Example

```javascript
import SwaggerTynidesigner from 'swagger_tynidesigner';

let apiInstance = new SwaggerTynidesigner.AuthApi();
let opts = {
  'inlineObject1': new SwaggerTynidesigner.InlineObject1() // InlineObject1 | 
};
apiInstance.authSignupPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

