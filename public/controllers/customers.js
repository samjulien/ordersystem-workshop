angular.module('app').controller('customersController', [
  '$scope',
  'customerService',
  function($scope, customerService) {
    $scope.title = 'Customers';

    activate();

    function activate() {
      return customerService.getCustomers().then(function(data) {
        $scope.customers = data;
      });
    }
  }
]);
