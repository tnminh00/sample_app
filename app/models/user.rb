class User < ApplicationRecord
  USER_PARAMS = %i(name email password password_confirmation).freeze
  before_save {self.email = email.downcase}
  validates :name, presence: true, length: {maximum: Settings.name.maximum}
  validates :email, presence: true, length: {maximum: Settings.email.maximum}, 
    format: {with: Settings.valid_email_regex}, uniqueness:true
  validates :password, presence: true,
    length: {minimum: Settings.password.minimum}
  has_secure_password
end
