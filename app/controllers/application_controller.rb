class ApplicationController < ActionController::Base
  protect_from_forgery

  before_action :set_locale

  include SessionsHelper

  def logged_in_user
    return if logged_in?
    store_location
    flash[:danger] = t "page.index.not_login"
    redirect_to login_path
  end

  def load_user
    @user = User.find_by id: params[:id]

    return if @user
    flash[:danger] = t "page.index.not_found"
    redirect_to root_path
  end

  private

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
    Rails.application.routes.default_url_options[:locale] = I18n.locale
  end

  def default_url_options
    {locale: I18n.locale}
  end
end
