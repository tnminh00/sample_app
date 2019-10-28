class UsersController < ApplicationController
  before_action :load_user, only: %i(show)

  def load_user
    @user = User.find_by id: params[:id]
  end

  def new
    @user = User.new
  end

  def show; end

  def create
    @user = User.new user_params

    if @user.save
      flash[:success] = t "page.signup.success"
      redirect_to @user
    else
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit User::USER_PARAMS
  end
end
