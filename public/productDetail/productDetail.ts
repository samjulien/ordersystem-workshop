const template = require('./productDetail.html');

export const productDetailComponent = {
  template: template,
  bindings: {
    product: '<'
  },
  controller: productDetailController
};

function productDetailController() {
  var vm = this;
  vm.title = 'Product Detail';
}
