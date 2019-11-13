class Micropost < ApplicationRecord
  belongs_to :user
  has_one_attached :image

  MICROPOST_PARAMS = %i(content image).freeze
  validates :user_id, presence: true
  validates :content, presence: true, length: {maximum: Settings.content.maximum}
  validates :image,
    content_type: {in: Settings.img_file},
    size: {less_than: Settings.img_size.megabytes}
  scope :order_microposts, ->{order created_at: :desc}

  def display_image
    image.variant resize: Settings.img_resize
  end
end
