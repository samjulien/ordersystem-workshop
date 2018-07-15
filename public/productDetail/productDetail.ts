export const productDetailComponent = {
  templateUrl: './productDetail/productDetail.html',
  bindings: {
    product: '<'
  },
  controller: productDetailController
};

function productDetailController() {
  var vm = this;
  vm.title = 'Product Detail';
}
