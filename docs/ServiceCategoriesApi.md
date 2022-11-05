# SwaggerTynidesigner.ServiceCategoriesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serviceCategoriesGet**](ServiceCategoriesApi.md#serviceCategoriesGet) | **GET** /service-categories | GetServiceCategories



## serviceCategoriesGet

> Object serviceCategoriesGet()

GetServiceCategories

Get Service Category Api

### Example

```javascript
import SwaggerTynidesigner from 'swagger_tynidesigner';

let apiInstance = new SwaggerTynidesigner.ServiceCategoriesApi();
apiInstance.serviceCategoriesGet((error, data, response) => {
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

