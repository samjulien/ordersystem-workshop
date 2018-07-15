export class ProductService {
  constructor(private $http) {}
  getProducts() {
    return this.$http.get('/api/products').then(response => {
      return response.data;
    });
  }

  getProduct(id) {
    return this.$http.get('/api/products/' + id).then(response => {
      return response.data;
    });
  }
}

ProductService.$inject = ['$http'];
