class Link < ActiveRecord::Base
  belongs_to :user
  validates :url, presence: true, url: true

  default_scope {order(created_at: :desc)}
end

