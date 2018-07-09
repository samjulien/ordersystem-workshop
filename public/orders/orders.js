angular.module('app').controller('ordersController', [
  '$location',
  '$scope',
  'orderService',
  'customerService',
  '$q',
  function($location, $scope, orderService, customerService, $q) {
    $scope.title = 'Orders';

    activate();

    function activate() {
      var promises = [customerService.getCustomers(), orderService.getOrders()];
      return $q.all(promises).then(function(data) {
        $scope.customers = data[0];
        $scope.orders = data[1];
        $scope.orders.forEach(function(order) {
          var customer = _.find($scope.customers, function(customer) {
            return order.customerId === customer.id;
          });
          order.customerName = customer.fullName;
        });
      });
    }

    $scope.goToCreateOrder = function() {
      $location.path('/orders/create');
    };
  }
]);
