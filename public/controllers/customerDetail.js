angular.module('app').controller('customerDetailController', [
  '$scope',
  'customer',
  'customerService',
  'addressFactory',
  'orderService',
  function($scope, customer, customerService, addressFactory, orderService) {
    $scope.title = 'Customer Detail';
    $scope.discountTemplate = '../templates/discount.html';
    $scope.customer = customer;
    $scope.address = addressFactory.getFullAddress(customer);
    $scope.editDiscount = false;
    $scope.discounts = [
      {
        discountId: 1,
        discountPercent: 10,
        discountName: 'Employee'
      },
      {
        discountId: 2,
        discountPercent: 5,
        discountName: 'Friends & Family'
      },
      {
        discountId: 3,
        discountPercent: 20,
        discountName: 'Famous Drummer'
      }
    ];

    activate();

    function activate() {
      return orderService
        .getOrdersByCustomer($scope.customer.id)
        .then(function(data) {
          $scope.orders = data;
          $scope.orders.forEach(function(order) {
            order.orderDate = moment(order.orderDate).format('MM/DD/YYYY');
          });
        });
    }

    $scope.editDiscountType = function() {
      $scope.editDiscount = true;
    };

    $scope.updateDiscountType = function() {
      $scope.editDiscount = false;
    };
  }
]);
