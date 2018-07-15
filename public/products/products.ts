const template = require('./products.html');

export const productsComponent = {
  template: template,
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
