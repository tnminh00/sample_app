class User < ApplicationRecord
  before_save {self.email = email.downcase}
  validates :name, presence: true, length: {Settings.name.maximum}
  validates :email, presence: true, length: {Settings.email.maximum}, 
    format:{with: Settings.valid_email_regex}, uniqueness:true
  validates :password, presence: true, length: {Settings.password.minimum}
  has_secure_password
end
