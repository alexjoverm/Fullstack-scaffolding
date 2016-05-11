'use strict';

angular.module('fullstackApp.auth', [
  'fullstackApp.constants',
  'fullstackApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
