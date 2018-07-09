angular.module('app').controller('productsController', [
  '$scope',
  'productService',
  function($scope, productService) {
    $scope.title = 'Products';

    activate();

    function activate() {
      return productService.getProducts().then(function(data) {
        $scope.products = data;
      });
    }
  }
]);
