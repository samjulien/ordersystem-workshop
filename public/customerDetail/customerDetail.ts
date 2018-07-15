import * as moment from 'moment';

export const customerDetailComponent = {
  templateUrl: './customerDetail/customerDetail.html',
  bindings: {
    customer: '<'
  },
  controller: customerDetailController
};

customerDetailController.$inject = ['addressService', 'orderService'];
function customerDetailController(addressService, orderService) {
  var vm = this;
  vm.title = 'Customer Detail';

  vm.$onInit = () => {
    vm.address = addressService.getFullAddress(vm.customer);
    return orderService.getOrdersByCustomer(vm.customer.id).then(data => {
      vm.orders = data;
      vm.orders.map(order => {
        order.orderDate = moment(order.orderDate).format('MM/DD/YYYY');
        return order;
      });
    });
  };

  vm.updateDiscount = discount => {
    vm.customer.discount = discount;
  };
}
