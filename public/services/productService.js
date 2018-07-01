(function() {
  'use strict';

  productService.$inject = ['$http'];
  function productService($http) {
    function getProducts() {
      return $http.get('/api/products').then(function(response) {
        return response.data;
      });
    }

    function getProduct(id) {
      return $http.get('/api/products/' + id).then(function(response) {
        return response.data;
      });
    }

    return {
      getProducts: getProducts,
      getProduct: getProduct
    };
  }

  angular.module('app').service('productService', productService);
})();
