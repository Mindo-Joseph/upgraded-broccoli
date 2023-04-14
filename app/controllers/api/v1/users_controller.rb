# app/controllers/api/v1/users_controller.rb
module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_user! # Assuming you have authentication in place

      def current
        puts current_user.inspect
        render json: current_user.as_json(only: [:id, :email, :role])
      end
    end
  end
end
