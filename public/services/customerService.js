angular.module('app').service('customerService', [
  '$http',
  function($http) {
    function getCustomers() {
      return $http.get('/api/customers').then(function(response) {
        return response.data;
      });
    }

    function getCustomer(id) {
      return $http.get('/api/customers/' + id).then(function(response) {
        return response.data;
      });
    }

    return {
      getCustomers: getCustomers,
      getCustomer: getCustomer
    };
  }
]);
