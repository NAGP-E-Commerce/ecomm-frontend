export const environment = {
  production: true,
  inventoryServiceURL: 'http://104.197.66.41/inventory/im/inventory',
  cartServiceURL: 'http://104.197.66.41/cart/ct/cart/',
  productServiceURL: 'http://104.197.66.41/product/',
  orderServiceURL: 'http://104.197.66.41/cart/ct/order/',
  anonymousUser: 'anonymous',
  defaultCategory: 'Watch',
  keycloakConfig: {
    clientId: 'login-app',
    realm: 'AmkartEcomKeyCloak',
    url: 'http://localhost:8180/auth/'
  }
};
