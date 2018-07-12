(function() {
  var customerDetailComponent = {
    templateUrl: './customerDetail/customerDetail.html',
    bindings: {
      customer: '<'
    },
    controller: customerDetailController
  };

  customerDetailController.$inject = ['addressFactory', 'orderService'];
  function customerDetailController(addressFactory, orderService) {
    var vm = this;
    vm.title = 'Customer Detail';

    vm.$onInit = function() {
      vm.address = addressFactory.getFullAddress(vm.customer);
      return orderService
        .getOrdersByCustomer(vm.customer.id)
        .then(function(data) {
          vm.orders = data;
          vm.orders.forEach(function(order) {
            order.orderDate = moment(order.orderDate).format('MM/DD/YYYY');
          });
        });
    };
  }

  angular.module('app').component('customerDetail', customerDetailComponent);
})();
