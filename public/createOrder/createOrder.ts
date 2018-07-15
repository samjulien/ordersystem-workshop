export const createOrderComponent = {
  templateUrl: './createOrder/createOrder.html',
  bindings: {},
  controller: createOrderController
};

createOrderController.$inject = [
  '$q',
  'orderService',
  'customerService',
  '$location',
  'productService'
];
function createOrderController(
  $q,
  orderService,
  customerService,
  $location,
  productService
) {
  var vm = this;
  vm.title = 'Create Order';

  vm.newOrder = {
    customerId: null,
    items: [
      {
        productId: null,
        quantity: null
      },
      {
        productId: null,
        quantity: null
      }
    ]
  };

  vm.$onInit = () => {
    var promises = [
      productService.getProducts(),
      customerService.getCustomers()
    ];
    return $q.all(promises).then(data => {
      vm.products = data[0];
      vm.customers = data[1];
    });
  };

  vm.postOrder = () => {
    vm.newOrder.items = vm.newOrder.items.filter(x => {
      return x.productId !== null;
    });

    return orderService.postOrder(vm.newOrder).then(() => {
      $location.path('/orders');
    });
  };
}
