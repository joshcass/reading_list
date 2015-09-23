class UsersController < ApplicationController
  skip_before_action :authorize!

  def new
    @user = User.new
  end

  def create
    @user = User.new valid_params
    if @user.save
      session[:user_id] = @user.id
      redirect_to links_path
    else
      flash[:errors] = link.errors.full_messages.join(" ")
      render :new
    end
  end

  private

  def valid_params
    params.require(:user).permit(:email, :password, :pasword_confirmation)
  end
end
