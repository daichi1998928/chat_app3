class RoomChannel < ApplicationCable::Channel
  def subscribed #フロントエンドとバックエンドが繋がったときに実行されるメソッド
    stream_from "room_channel"
    # stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    message = Message.create!(content: data['message'])
    templete = ApplicationController.renderer.render(partial: 'messages/message', locals: {message: message})
    ActionCable.server.broadcast 'room_channel', templete
  end
end
