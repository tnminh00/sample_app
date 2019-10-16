class MicropostsController < ApplicationController
  before_action :logged_in_user, only: %i(create destroy)
  before_action :correct_user, only: %i(destroy)

  def create
    @micropost = current_user.microposts.build micropost_params
    @micropost.image.attach params[:micropost][:image]
    
    if @micropost.save
      flash[:success] = t "page.micropost.create"
      redirect_to root_path
    else
      @feed_items = current_user.microposts.page params[:page]
      render "static_pages/home"
    end
  end

  def destroy
    @micropost.destroy

    if @micropost.destroyed?
      flash[:success] = t "page.micropost.del_success"
    else
      flash[:danger] = t "page.micropost.del_fail"
    end
    redirect_to request.referer || root_path
  end

  private

  def micropost_params
    params.require(:micropost).permit Micropost::MICROPOST_PARAMS
  end

  def correct_user
    @micropost = current_user.microposts.find_by id: params[:id]
    redirect_to root_path unless @micropost
  end
end
