'use strict';

angular.module('meBanka', [
   'ngAnimate'
  ,'ngCookies'
  ,'ngTouch'
  ,'ngSanitize'
  ,'ngResource'
  ,'ui.router'
  ,'ui.bootstrap'
  ,'angularSmoothscroll'
  ,'vModal'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('coming', {
        url: '/teste',
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
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl',
            // d8c87b8501c0cda158521b69a0f15d1c60bfddbb
        });      


    $urlRouterProvider.otherwise('/');
})
;
