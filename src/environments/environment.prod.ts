export const environment = {
  production: true,
  inventoryServiceURL: 'http://104.198.43.159/im/inventory',
  cartServiceURL: 'http://104.198.43.159/ct/cart/',
  productServiceURL: 'http://104.198.43.159:31483/',
  orderServiceURL: 'http://104.198.43.159/ct/order/',
  productListingServiceURL: 'http://104.198.43.159/',

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
