# SwaggerTynidesigner.DesignersApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**designersIdArtworksGet**](DesignersApi.md#designersIdArtworksGet) | **GET** /designers/{id}/artworks | GetDesignerArtworks
[**designersIdGet**](DesignersApi.md#designersIdGet) | **GET** /designers/{id} | DesignerDetail
[**designersIdServicesGet**](DesignersApi.md#designersIdServicesGet) | **GET** /designers/{id}/services | GetDesignerServices
[**designersPost**](DesignersApi.md#designersPost) | **POST** /designers | Create Designer



## designersIdArtworksGet

> Object designersIdArtworksGet(id, opts)

GetDesignerArtworks

### Example

```javascript
import SwaggerTynidesigner from 'swagger_tynidesigner';

let apiInstance = new SwaggerTynidesigner.DesignersApi();
let id = "id_example"; // String | 
let opts = {
  'pagination': new SwaggerTynidesigner.Pagination1() // Pagination1 | 쿼리 페이지네이션, '{\"page\":\"1\",\"limit\",\"10\"}'
};
apiInstance.designersIdArtworksGet(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **pagination** | [**Pagination1**](.md)| 쿼리 페이지네이션, &#39;{\&quot;page\&quot;:\&quot;1\&quot;,\&quot;limit\&quot;,\&quot;10\&quot;}&#39; | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## designersIdGet

> DesignerDto designersIdGet(id)

DesignerDetail

### Example

```javascript
import SwaggerTynidesigner from 'swagger_tynidesigner';

let apiInstance = new SwaggerTynidesigner.DesignersApi();
let id = "id_example"; // String | 
apiInstance.designersIdGet(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**DesignerDto**](DesignerDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## designersIdServicesGet

> Object designersIdServicesGet(id, opts)

GetDesignerServices

### Example

```javascript
import SwaggerTynidesigner from 'swagger_tynidesigner';

let apiInstance = new SwaggerTynidesigner.DesignersApi();
let id = "id_example"; // String | 
let opts = {
  'pagination': new SwaggerTynidesigner.Pagination1() // Pagination1 | 쿼리 페이지네이션, '{\"page\":\"1\",\"limit\",\"10\"}'
};
apiInstance.designersIdServicesGet(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **pagination** | [**Pagination1**](.md)| 쿼리 페이지네이션, &#39;{\&quot;page\&quot;:\&quot;1\&quot;,\&quot;limit\&quot;,\&quot;10\&quot;}&#39; | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## designersPost

> Object designersPost(opts)

Create Designer

null

### Example

```javascript
import SwaggerTynidesigner from 'swagger_tynidesigner';

let apiInstance = new SwaggerTynidesigner.DesignersApi();
let opts = {
  'inlineObject2': new SwaggerTynidesigner.InlineObject2() // InlineObject2 | 
};
apiInstance.designersPost(opts, (error, data, response) => {
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
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

