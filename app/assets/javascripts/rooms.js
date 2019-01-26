// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
App.room = App.cable.subscriptions.create("RoomChannel")

  connected:  function (){
    //フロントエンド内でメッセージが来てるか監視しているもの

  }


  disconnected: function (){

  }

  received: (data) function (){
    # Called when there's incoming data on the websocket for this channel
  }

  speak: function(){
    return this.perform ('speak');
  }

