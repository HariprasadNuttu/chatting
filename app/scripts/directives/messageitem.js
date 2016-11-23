'use strict';

/**
 * @ngdoc directive
 * @name chatingApp.directive:messageItem
 * @description
 * # messageItem
 */
angular.module('chatingApp')
  .directive('messageItem', function () {
    return {
      restrict: 'E',
      scope:{
        senderUuid: "@",
          content: "@",
          date: "@"
      },
      templateUrl:'views/message-item.html',
      link: function postLink(scope, element, attrs) {
        scope.initiateUser = function () {
          console.log("hello");
        }
      }
    };
  });
