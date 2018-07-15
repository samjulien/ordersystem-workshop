import * as _ from 'lodash';

export const ordersComponent = {
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

  vm.$onInit = () => {
    var promises = [customerService.getCustomers(), orderService.getOrders()];
    return $q.all(promises).then(data => {
      vm.customers = data[0];
      vm.orders = data[1];
      vm.orders.forEach(order => {
        var customer = _.find(vm.customers, customer => {
          return order.customerId === customer.id;
        });
        order.customerName = customer.fullName;
      });
    });
  };

  vm.goToCreateOrder = () => {
    $location.path('/orders/create');
  };
}
