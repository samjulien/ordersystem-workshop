const template = require('./discount.html');

export const discountComponent = {
  template: template,
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

  vm.editDiscountType = () => {
    vm.editDiscount = true;
  };

  vm.updateDiscountType = () => {
    vm.update({ discount: vm.selectedDiscount });
    vm.editDiscount = false;
  };
}
