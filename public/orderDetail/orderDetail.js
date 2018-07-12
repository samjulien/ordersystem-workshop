(function() {
  'use strict';

  var orderDetailComponent = {
    templateUrl: './orderDetail/orderDetail.html',
    bindings: {
      order: '<'
    },
    controller: orderDetailController
  };

  orderDetailController.$inject = ['productService', 'customerService', '$q'];
  function orderDetailController(productService, customerService, $q) {
    var vm = this;
    vm.title = 'Order Detail';

    vm.$onInit = function() {
      var promises = [
        productService.getProducts(),
        customerService.getCustomer(vm.order.customerId)
      ];
      return $q.all(promises).then(function(data) {
        var products = data[0];
        vm.customer = data[1];
        vm.order.items.forEach(function(item) {
          var product = _.find(products, function(product) {
            return product.id === item.productId;
          });
          item.productName = product.name;
          item.itemPrice = item.quantity * product.price;
        });
      });
    };
  }

  angular.module('app').component('orderDetail', orderDetailComponent);
})();
