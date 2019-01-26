// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
App.room = App.cable.subscriptions.create("RoomChannel",{

  connected:  function (){
    //フロントエンド内でメッセージが来てるか監視しているもの

  },


  disconnected: function (){

  },

  received: function (data){
    //dataを受け取る時に使われるメソッド
    // Called when there's incoming data on the websocket for this channel
    alert(data)
  },

  speak: function(){
    return this.perform ('speak', {message: content});
    //speakがあるとrailsのsepakメソッドが実行される

  }

});

document.addEventListener('DOMContentLoaded',function(){
  input = document.getElementById('chat-input')
  button = document
  button.addEventListener('click', function(){
    content = input.value

  })
})
