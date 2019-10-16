class FollowingsController < ApplicationController
  before_action :load_user, only: %i(index)
  
  def index
    @title = t "page.follow.following"
    @users = @user.following.page params[:page]
    render "users/show_follow"
  end
end
