class User < ApplicationRecord
  attr_accessor :remember_token
  before_save {self.email = email.downcase}

  USER_PARAMS = %i(name email password password_confirmation).freeze
  validates :name, presence: true, length: {maximum: Settings.name.maximum}
  validates :email, presence: true, length: {maximum: Settings.email.maximum}, 
    format: {with: Settings.valid_email_regex}, uniqueness:true
  validates :password, presence: true,
    length: {minimum: Settings.password.minimum}
  has_secure_password

  class << self
    def User.digest string
      cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
        BCrypt::Engine.cost
      BCrypt::Password.create string, cost: cost
    end

    def User.new_token
      SecureRandom.urlsafe_base64
    end
  end

  def remember
    self.remember_token = User.new_token
    update_attributes remember_digest: User.digest(remember_token)
  end

  def authenticated? remember_token
    BCrypt::Password.new(remember_digest).is_password? remember_token
  end

  def forget
    update_attributes remember_digest: nil
  end
end
