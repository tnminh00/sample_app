class StaticPagesController < ApplicationController
  def home
    return unless logged_in?
    @micropost = current_user.microposts.build
    @feed_items = current_user.microposts.order_microposts.page(params[:page]).per Settings.pages
  end

  def help; end

  def about; end

  def contact; end
end
