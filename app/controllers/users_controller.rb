class UsersController < ApplicationController
  before_action :load_user, only: %i(show destroy)
  before_action :correct_user, only: %i(edit update)
  before_action :logged_in_user, except: %i(show new create)
  before_action :check_is_admin, only: %i(destroy)

  def new
    @user = User.new
  end

  def index
    @users = User.page(params[:page]).per Settings.pages
  end

  def show; end

  def create
    @user = User.new user_params

    if @user.save
      @user.send_activation_email
      flash[:info] = t "page.signup.activate"
      redirect_to root_path
    else
      render :new
    end
  end

  def edit; end

  def update
    if @user.update user_params
      flash[:success] = t "page.edit.success"
      redirect_to @user
    else
      render :edit
    end
  end

  def destroy
    @user.destroy
    
    if @user.destroyed? 
      flash[:success] = t("page.edit.del_success")
    else
      flash[:danger] = t("page.edit.del_unsuccess")
    end
    redirect_to users_path
  end

  private

  def load_user
    @user = User.find_by id: params[:id]

    return if @user
    flash[:danger] = t "page.index.not_found"
    redirect_to root_path
  end

  def user_params
    params.require(:user).permit User::USER_PARAMS
  end

  def logged_in_user
    return if logged_in?
    store_location
    flash[:danger] = t "page.index.not_login"
    redirect_to login_path
  end

  def correct_user
    @user = User.find_by id: params[:id]

    return if current_user? @user
    flash[:danger] = t "page.index.not_found"
    redirect_to root_path
  end

  def check_is_admin
    return if current_user.admin?
    flash[:danger] = t "page.edit.not_admin"
    redirect_to root_path
  end
end
