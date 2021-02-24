export const environment = {
  production: true,
  inventoryServiceURL: 'http://35.224.251.195/im/inventory',
  cartServiceURL: 'http://104.197.155.135/ct/cart/',
  productServiceURL: 'https://35.202.95.28:31483/',
  orderServiceURL: 'http://104.197.155.135/ct/order/',
  productListingServiceURL: 'https://35.202.95.28:31483/',

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
