'use strict';

angular.
module('phoneApp').
config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
  function config($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        component: 'phoneList'
      })
      .state('phonesDetails', {
        url: '/phones/{phoneId}',
        component: 'phoneDetail',
      });

      $locationProvider.hashPrefix('');
      $locationProvider.html5Mode(true);
      
    $urlRouterProvider.otherwise('/');

  }

]);