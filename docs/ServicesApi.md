# SwaggerTynidesigner.ServicesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**servicesPost**](ServicesApi.md#servicesPost) | **POST** /services | CreateService



## servicesPost

> Object servicesPost(opts)

CreateService

CreateServiceAPi(디자이너 서비스 생성)

### Example

```javascript
import SwaggerTynidesigner from 'swagger_tynidesigner';
let defaultClient = SwaggerTynidesigner.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new SwaggerTynidesigner.ServicesApi();
let opts = {
  'inlineObject3': new SwaggerTynidesigner.InlineObject3() // InlineObject3 | 
};
apiInstance.servicesPost(opts, (error, data, response) => {
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
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | [optional] 

### Return type

**Object**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

