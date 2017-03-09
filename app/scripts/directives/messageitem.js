'use strict';

/**
 * @ngdoc directive
 * @name chatingApp.directive:messageItem
 * @description
 * # messageItem
 */
angular.module('chatingApp')
  .directive('messageItem', function ($uibModal) {
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
          scope.modalInstance = $uibModal.open({
        animation: true,
        backdrop: 'static',
        keyboard: false,
        openedClass: 'eteki-modal',
        templateUrl: 'views/chat_box.html',
        scope: scope,
        size: 'md'
      });
        }
      }
    };
  });
