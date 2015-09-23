class ReadController < ApplicationController
  before_action :find_link

  def create
    @link.read = true
    @link.save
    render json: @link
  end

  def destroy
    @link.read = false
    @link.save
    render json: @link
  end

  private

  def find_link
    @link = Link.find(params[:link_id])
  end
end
