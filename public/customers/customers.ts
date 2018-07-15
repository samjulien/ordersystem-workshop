export const customersComponent = {
  templateUrl: './customers/customers.html',
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
