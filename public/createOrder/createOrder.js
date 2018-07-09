angular.module('app').controller('createOrder', [
  '$scope',
  '$q',
  'orderService',
  'customerService',
  '$location',
  'productService',
  function createOrderComponentController(
    $scope,
    $q,
    orderService,
    customerService,
    $location,
    productService
  ) {
    $scope.title = 'Create Order';

    $scope.newOrder = {
      customerId: null,
      items: [
        {
          productId: null,
          quantity: null
        },
        {
          productId: null,
          quantity: null
        }
      ]
    };

    activate();

    function activate() {
      var promises = [
        productService.getProducts(),
        customerService.getCustomers()
      ];
      return $q.all(promises).then(function(data) {
        $scope.products = data[0];
        $scope.customers = data[1];
      });
    }

    $scope.postOrder = function() {
      $scope.newOrder.items = $scope.newOrder.items.filter(function(x) {
        return x.productId !== null;
      });

      return orderService.postOrder($scope.newOrder).then(() => {
        $location.path('/orders');
      });
    };
  }
]);
