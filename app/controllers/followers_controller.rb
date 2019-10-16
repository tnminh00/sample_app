class FollowersController < ApplicationController
  before_action :load_user, only: %i(index)
  
  def index
    @title = t "page.follow.followers"
    @users = @user.followers.page params[:page]
    render "users/show_follow"
  end
end
