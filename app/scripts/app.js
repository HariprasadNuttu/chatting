'use strict';

/**
 * @ngdoc overview
 * @name chatingApp
 * @description
 * # chatingApp
 *
 * Main module of the application.
 */
angular
  .module('chatingApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'pubnub.angular.service'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .state('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl',
      })
    $urlRouterProvider.otherwise('/');
  })
  .value("currentUser","user_"+Math.floor(100000 + Math.random() * 900000).toString())
  .run(['Pubnub','currentUser', function(Pubnub,currentUser) {
    // Initialize with your API keys
    console.log(currentUser);
    Pubnub.init({
      publish_key: 'pub-c-a1cd7ac1-585e-478e-925b-65d17ce62f7d',
          subscribe_key: 'sub-c-204f063e-c559-11e5-b764-02ee2ddab7fe',
          uuid: currentUser
      });
}])
