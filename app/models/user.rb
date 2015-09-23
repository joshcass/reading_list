class User < ActiveRecord::Base
  has_secure_password
  validates_confirmation_of :password
  validates :password, :email, presence: true
  validates :email, uniqueness: true
  validates_format_of :email, with: /.+@.+\..+/i
  has_many :links

end
