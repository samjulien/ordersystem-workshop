const template = require('./home.html');

export var homeComponent = {
  template: template,
  bindings: {},
  controller: homeController
};

function homeController() {
  var vm = this;
  vm.title = 'Awesome, Inc. Internal Ordering System';
}
