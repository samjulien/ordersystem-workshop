const template = require('./customers.html');

export const customersComponent = {
  template: template,
  bindings: {},
  controller: customersController
};

customersController.$inject = ['customerService'];
function customersController(customerService) {
  var vm = this;
  vm.title = 'Customers';

  vm.$onInit = () => {
    return customerService.getCustomers().then(data => {
      vm.customers = data;
    });
  };
}
