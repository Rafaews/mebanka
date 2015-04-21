'use strict';

angular.module('meBanka', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('coming', {
        url: '/',
        templateUrl: 'app/comingSoon/comingSoon.html',
        controller: 'comingSoonCtrl'
      });
      $stateProvider
        .state('loginAdmin', {
          url: '/devmeBanka',
          templateUrl: 'app/loginAdmin/loginAdmin.html',
          controller: 'loginAdminCtrl'
        });
        $stateProvider
          .state('home', {
            url: '/d8c87b8501c0cda158521b69a0f15d1c60bfddbb',
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl',
        });
        


    $urlRouterProvider.otherwise('/');
  })
;
