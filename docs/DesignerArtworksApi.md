# SwaggerTynidesigner.DesignerArtworksApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**artworksPost**](DesignerArtworksApi.md#artworksPost) | **POST** /artworks | Create Artwork



## artworksPost

> Object artworksPost(opts)

Create Artwork

### Example

```javascript
import SwaggerTynidesigner from 'swagger_tynidesigner';

let apiInstance = new SwaggerTynidesigner.DesignerArtworksApi();
let opts = {
  'inlineObject4': new SwaggerTynidesigner.InlineObject4() // InlineObject4 | 
};
apiInstance.artworksPost(opts, (error, data, response) => {
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
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

