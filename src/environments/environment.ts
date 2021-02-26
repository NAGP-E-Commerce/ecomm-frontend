// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  inventoryServiceURL: 'http://35.224.251.195/im/inventory',
  cartServiceURL: 'http://104.197.155.135/ct/cart/',
  productServiceURL: 'http://34.121.201.114:31483/',
  orderServiceURL: 'http://104.197.155.135/ct/order/',
  productListingServiceURL: 'http://34.121.201.114:31483/',

  // inventoryServiceURL: 'http://35.193.47.77/inventory/im/inventory',
  // cartServiceURL: 'http://35.193.47.77/cart/ct/cart/',
  // productServiceURL: 'http://35.193.47.77/product/',
  // orderServiceURL: 'http://35.193.47.77/cart/ct/order/',

  anonymousUser: 'anonymous',
  defaultCategory: 'Watch',
  keycloakConfig: {
    clientId: 'login-app',
    realm: 'AmkartEcomKeyCloak',
    url: 'http://104.155.223.84/auth'
    //url: 'http://localhost:8180/auth/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
