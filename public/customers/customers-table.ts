const template = require('./customers-table.html');

export const customersTableComponent = {
  template: template,
  bindings: {
    customers: '<'
  },
  controller: customersTableComponentController
};

function customersTableComponentController() {
  var vm = this;
}
