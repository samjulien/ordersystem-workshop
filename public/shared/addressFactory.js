(function() {
  'use strict';

  function addressFactory() {
    var service = {};

    service.getFullAddress = function(customer) {
      return (
        customer.address1 +
        ', ' +
        customer.city +
        ', ' +
        customer.state +
        ' ' +
        customer.zip
      );
    };

    return service;
  }

  angular.module('app').factory('addressFactory', addressFactory);
})();
