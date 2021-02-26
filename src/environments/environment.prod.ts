export const environment = {
  production: true,
  inventoryServiceURL: 'http://35.239.68.145/inventory/im/inventory',
  cartServiceURL: 'http://35.239.68.145/cart/ct/cart/',
  productServiceURL: 'http://35.239.68.145/product/',
  orderServiceURL: 'http://35.239.68.145/cart/ct/cart/order/',
  productListingServiceURL: 'http://35.239.68.145/product/',

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
