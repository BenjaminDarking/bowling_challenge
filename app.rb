require 'sinatra'

class Bowling < Sinatra::Base

  enable sessions

  get '/' do

  end

run! if app_file == $0

end
