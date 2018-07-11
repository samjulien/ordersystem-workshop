(function() {
  'use strict';

  var customersComponent = {
    templateUrl: './customers/customers.html',
    bindings: {},
    controller: customersController
  };

  customersController.$inject = ['customerService'];
  function customersController(customerService) {
    var vm = this;
    vm.title = 'Customers';

    vm.$onInit = function() {
      return customerService.getCustomers().then(function(data) {
        vm.customers = data;
      });
    };
  }

  angular.module('app').component('customers', customersComponent);
})();
