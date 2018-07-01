(function() {
  'use strict';

  orderService.$inject = ['$http'];
  function orderService($http) {
    function getOrders() {
      return $http.get('/api/orders').then(function(response) {
        return response.data;
      });
    }

    function getOrder(id) {
      return $http.get('/api/orders/' + id).then(function(response) {
        return response.data;
      });
    }

    function getOrdersByCustomer(customerId) {
      return $http
        .get('/api/customers/' + customerId + '/orders')
        .then(function(response) {
          return response.data;
        });
    }

    function postOrder(order) {
      return $http.post('/api/orders', order).then(function(response) {
        return response.data;
      });
    }

    return {
      getOrders: getOrders,
      getOrder: getOrder,
      getOrdersByCustomer: getOrdersByCustomer,
      postOrder: postOrder
    };
  }

  angular.module('app').service('orderService', orderService);
})();
