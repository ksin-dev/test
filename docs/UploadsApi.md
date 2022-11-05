# SwaggerTynidesigner.UploadsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**uploadsPost**](UploadsApi.md#uploadsPost) | **POST** /uploads | Upload



## uploadsPost

> InlineResponse200 uploadsPost(opts)

Upload

Upload File Input

### Example

```javascript
import SwaggerTynidesigner from 'swagger_tynidesigner';
let defaultClient = SwaggerTynidesigner.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new SwaggerTynidesigner.UploadsApi();
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.uploadsPost(opts, (error, data, response) => {
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
 **file** | **File**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

