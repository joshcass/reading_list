class SessionsController < ApplicationController
  skip_before_action :authorize!

  def create
    user = User.find_by(email: valid_params[:email])
    if user && user.authenticate(valid_params[:password])
      session[:user_id] = user.id
      redirect_to links_path
    else
      flash[:alert] = "Login failed"
      redirect_to root_path
    end
  end

  def destroy
    session.clear
    redirect_to root_path
  end

  private

  def valid_params
    params.require(:session).permit(:email, :password)
  end
end
