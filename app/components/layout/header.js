'use strict';

angular.module('com.ngnice.app').controller('LayoutHeaderController', function LayoutHeaderController(Logout) {
  var vm = this;
  vm.logout = function () {
    Logout.save();
    // 注销时整页刷新，以免有内存残留
    location.reload();
  }
});

angular.module('com.ngnice.app').directive('layoutHeader', function LayoutHeader() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/layout/header.html',
    controller: 'LayoutHeaderController as vm'
  };
});
