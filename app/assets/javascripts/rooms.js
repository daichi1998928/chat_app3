// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
App.room = App.cable.subscriptions.create("RoomChannel",{

  connected:  function (){
    //フロントエンド内でメッセージが来てるか監視しているもの

  },


  disconnected: function (){

  },

  received: function (message){
    //dataを受け取る時に使われるメソッド
    // Called when there's incoming data on the websocket for this channel
    const messages = document.getElementById('messages')
    messages.innerHTML +=  message
  },

  speak: function(content){
    return this.perform ('speak', {message: content});
    //speakがあるとrailsのsepakメソッドが実行される

  }

});

document.addEventListener('DOMContentLoaded',function(){
  const input = document.getElementById('chat-input')
  const button = document.getElementById('button')
  button.addEventListener('click', function(){
    const content = input.value
    App.room.speak(content)
    input.value = ''
  })
})
