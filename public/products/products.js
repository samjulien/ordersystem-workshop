(function() {
  'use strict';

  var productsComponent = {
    templateUrl: './products/products.html',
    bindings: {},
    controller: productsController
  };

  productsController.$inject = ['productService'];
  function productsController(productService) {
    var vm = this;
    vm.title = 'Products';

    vm.$onInit = function() {
      return productService.getProducts().then(function(data) {
        vm.products = data;
      });
    };
  }

  angular.module('app').component('products', productsComponent);
})();
