'use strict';

/**
 * @ngdoc directive
 * @name chatingApp.directive:messageList
 * @description
 * # messageList
 */
angular.module('chatingApp')
  .directive('messageList', function ($timeout, $anchorScroll, messageFactory) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl:'views/message-list.html',
      link: function postLink(scope, element, attrs) {
        var element = angular.element(element)

            var init = function() {};

            init();

      },
      controller: function($scope) {
         $scope.autoScrollDown = true;
            $scope.messages = messageFactory;
            // $scope.scrollToBottom = function() {
            //
            //       var uuid_last_message = $scope.messages.pop().uuid;
            //       $anchorScroll(uuid_last_message);
            //
            //   };
            // Hook that is called once the list is completely rendered
            $scope.listDidRender = function(){

                  $scope.scrollToBottom();
            };
        }
    };
  });
