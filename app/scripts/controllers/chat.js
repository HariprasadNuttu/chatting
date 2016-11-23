'use strict';

/**
 * @ngdoc function
 * @name chatingApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * Controller of the chatingApp
 */
angular.module('chatingApp')
  .controller('ChatCtrl', function ($scope,Pubnub,currentUser,messageFactory) {
    // $scope.messages = messageFactory;
    // console.log($scope.messages);
  //   $scope.messages = [];
  //   $scope.channel = "Personal"
  //   // $scope.uuid = "user_"+Math.floor(100000 + Math.random() * 900000).toString();
  //   $scope.uuid = currentUser;
  //   console.log($scope.uuid);
  //   // Initialize pubnub
  //   Pubnub.init({
  //      publish_key: 'pub-c-a1cd7ac1-585e-478e-925b-65d17ce62f7d',
  //      subscribe_key: 'sub-c-204f063e-c559-11e5-b764-02ee2ddab7fe',
  //      ssl: true,
  //      uuid: $scope.uuid
  //  });
  //
  //
  // //  sendMessage
  // $scope.sendMessage = function () {
  //   console.log("sdfasdfsa");
  //     Pubnub.publish({
  //       channel:$scope.channel,
  //       message:{
  //         content:$scope.messageContent,
  //         sender_uuid:$scope.uuid,
  //         date: new Date()
  //       },
  //       // get send users
  //       callback:function (m) {
  //         console.log(m);
  //           }
  //     })
  //
  //     $scope.messageContent = '';
  // }
  //
  //
  //   // recieve message -> which channerl subscribe
  //   Pubnub.subscribe({
  //     channel:$scope.channel,
  //     triggerEvents:['callback']
  //   })
  //   // trigger message which channel subscribe messages
  //   $scope.$on(Pubnub.getMessageEventNameFor($scope.channel), function (ngEvent, m) {
  //     console.log(ngEvent);
  //     console.log(m);
  //       $scope.$apply(function () {
  //           $scope.messages.push(m)
  //             console.log($scope.messages);
  //       });
  //   });

  });
