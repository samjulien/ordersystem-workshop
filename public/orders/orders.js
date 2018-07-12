(function() {
  'use strict';

  var ordersComponent = {
    templateUrl: './orders/orders.html',
    bindings: {},
    controller: ordersController
  };

  ordersController.$inject = [
    '$location',
    'orderService',
    'customerService',
    '$q'
  ];
  function ordersController($location, orderService, customerService, $q) {
    var vm = this;
    vm.title = 'Orders';

    vm.$onInit = function() {
      var promises = [customerService.getCustomers(), orderService.getOrders()];
      return $q.all(promises).then(function(data) {
        vm.customers = data[0];
        vm.orders = data[1];
        vm.orders.forEach(function(order) {
          var customer = _.find(vm.customers, function(customer) {
            return order.customerId === customer.id;
          });
          order.customerName = customer.fullName;
        });
      });
    };

    vm.goToCreateOrder = function() {
      $location.path('/orders/create');
    };
  }

  angular.module('app').component('orders', ordersComponent);
})();
