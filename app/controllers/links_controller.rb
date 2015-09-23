class LinksController < ApplicationController
  def index
    @links = current_user.links
  end

  def create
    link = current_user.links.new valid_params
    if link.save
      render json: link
    else
      flash.now[:alert] = link.errors.full_messages.join(" ")
    end
  end

  private

  def valid_params
    params.require(:link).permit(:url)
  end
end
