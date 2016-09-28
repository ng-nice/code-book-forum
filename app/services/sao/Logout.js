'use strict';

angular.module('com.ngnice.app').factory('Logout', function LoginFactory($resource) {
  return $resource('/api/logout');
});
