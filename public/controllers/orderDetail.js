angular.module('app').controller('orderDetailController', [
  '$scope',
  'order',
  'productService',
  'customerService',
  '$q',
  function($scope, order, productService, customerService, $q) {
    $scope.title = 'Order Detail';
    $scope.order = order;

    activate();

    function activate() {
      var promises = [
        productService.getProducts(),
        customerService.getCustomer($scope.order.customerId)
      ];
      return $q.all(promises).then(function(data) {
        var products = data[0];
        $scope.customer = data[1];
        $scope.order.items.forEach(function(item) {
          var product = _.find(products, function(product) {
            return product.id === item.productId;
          });
          item.productName = product.name;
          item.itemPrice = item.quantity * product.price;
        });
      });
    }
  }
]);
