import * as _ from 'lodash';

const template = require('./orderDetail.html');

export const orderDetailComponent = {
  template: template,
  bindings: {
    order: '<'
  },
  controller: orderDetailController
};

orderDetailController.$inject = ['productService', 'customerService', '$q'];
function orderDetailController(productService, customerService, $q) {
  var vm = this;
  vm.title = 'Order Detail';

  vm.$onInit = () => {
    var promises = [
      productService.getProducts(),
      customerService.getCustomer(vm.order.customerId)
    ];
    return $q.all(promises).then(data => {
      var products = data[0];
      vm.customer = data[1];
      vm.order.items.forEach(item => {
        var product = _.find(products, product => {
          return product.id === item.productId;
        });
        item.productName = product.name;
        item.itemPrice = item.quantity * product.price;
      });
    });
  };
}
