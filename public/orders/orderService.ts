export class OrderService {
  constructor(private $http) {}
  getOrders() {
    return this.$http.get('/api/orders').then(response => {
      return response.data;
    });
  }

  getOrder(id) {
    return this.$http.get('/api/orders/' + id).then(response => {
      return response.data;
    });
  }

  getOrdersByCustomer(customerId) {
    return this.$http
      .get('/api/customers/' + customerId + '/orders')
      .then(response => {
        return response.data;
      });
  }

  postOrder(order) {
    return this.$http.post('/api/orders', order).then(response => {
      return response.data;
    });
  }
}

OrderService.$inject = ['$http'];
