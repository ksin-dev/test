# SwaggerTynidesigner.SchoolsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**schoolsGet**](SchoolsApi.md#schoolsGet) | **GET** /schools | GetSchools



## schoolsGet

> Object schoolsGet()

GetSchools

### Example

```javascript
import SwaggerTynidesigner from 'swagger_tynidesigner';

let apiInstance = new SwaggerTynidesigner.SchoolsApi();
apiInstance.schoolsGet((error, data, response) => {
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

