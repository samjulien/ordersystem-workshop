(function() {
  'use strict';

  var discountComponent = {
    templateUrl: './customerDetail/discount.html',
    bindings: {
      customerDiscount: '<',
      update: '&'
    },
    controller: discountComponentController
  };

  function discountComponentController() {
    var vm = this;
    vm.editDiscount = false;
    vm.discounts = [
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

    vm.editDiscountType = function() {
      vm.editDiscount = true;
    };

    vm.updateDiscountType = function() {
      vm.update({ discount: vm.selectedDiscount });
      vm.editDiscount = false;
    };
  }

  angular.module('app').component('discount', discountComponent);
})();
