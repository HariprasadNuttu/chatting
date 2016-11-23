'use strict';

/**
 * @ngdoc service
 * @name chatingApp.messageFactory
 * @description
 * # messageFactory
 * Factory in the chatingApp.
 */
angular.module('chatingApp')
  .factory('messageFactory', function ($rootScope, $pubnubChannel, currentUser) {
    // Service logic
    // ...

    // var meaningOfLife = 42;
    //
    // // Public API here
    // return {
    //   someMethod: function () {
    //     return meaningOfLife;
    //   }
    // };


    var channel = $pubnubChannel.$extend({
      sendMessage:function (messageContent) {
        return this.$publish({
            uuid:(Date.now()+currentUser),
            content:messageContent,
            sender_uuid:currentUser,
            date: Date.now()
        })
      }
    });
    return channel('Hariprasad', {
            autoload: 10,
            presence: true
        });
  });
