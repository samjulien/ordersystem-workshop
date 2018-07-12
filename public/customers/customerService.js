(function() {
  'use strict';

  customerService.$inject = ['$http'];
  function customerService($http) {
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

  angular.module('app').service('customerService', customerService);
})();
