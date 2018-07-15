export class CustomerService {
  constructor(private $http) {}
  getCustomers() {
    return this.$http.get('/api/customers').then(response => {
      return response.data;
    });
  }

  getCustomer(id) {
    return this.$http.get('/api/customers/' + id).then(response => {
      return response.data;
    });
  }
}

CustomerService.$inject = ['$http'];
