(function() {
  'use strict';

  var productDetailComponent = {
    templateUrl: './productDetail/productDetail.html',
    bindings: {
      product: '<'
    },
    controller: productDetailController
  };

  function productDetailController() {
    var vm = this;
    vm.title = 'Product Detail';
  }

  angular.module('app').component('productDetail', productDetailComponent);
})();
