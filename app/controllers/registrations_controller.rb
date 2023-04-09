class RegistrationsController < Devise::RegistrationsController
  protected
  def sign_up_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :role)
  end
end
