class TutorDashboardController < ApplicationController
  before_action :authenticate_user!
  # before_action :ensure_tutor

  def index
    puts current_user.role
    if current_user.tutor?
      @learners = current_user.learners
    end
  end

  private
  def ensure_tutor
    unless current_user.role == "tutor"
      flash[:alert] = "You do not have enough permissions to see this page"
      redirect_to root_path
    end
  end
end
