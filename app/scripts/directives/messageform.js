'use strict';

/**
 * @ngdoc directive
 * @name chatingApp.directive:messageForm
 * @description
 * # messageForm
 */
angular.module('chatingApp')
  .directive('messageForm', function (currentUser,messageFactory) {
    return {
      restrict: 'E',
      templateUrl:'views/message_form.html',
      link: function postLink(scope, element, attrs) {
        scope.uuid = currentUser;
        scope.messageContent = '';

           scope.sendMessage = function() {
               messageFactory.sendMessage(scope.messageContent);
               scope.messageContent = '';
           }
      }
    };
  });
