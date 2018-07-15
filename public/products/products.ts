export const productsComponent = {
  templateUrl: './products/products.html',
  bindings: {},
  controller: productsController
};

productsController.$inject = ['productService'];
function productsController(productService) {
  var vm = this;
  vm.title = 'Products';

  vm.$onInit = () => {
    return productService.getProducts().then(data => {
      vm.products = data;
    });
  };
}
