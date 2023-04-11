class LearnerDashboardController < ApplicationController
  before_action :authenticate_user!
  before_action :ensure_learner


  def index
  end

  private

  def ensure_learner
    unless current_user.role == 'learner'
      flash[:alert] = "You do not have enough permissions to access the learner dashboard"
      redirect_to root_path
    end 
  end
end
