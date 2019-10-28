module ApplicationHelper
  def full_title page_title = ""
    basic_title = t "page.title.basic_title"
    page_title.empty? ? basic_title : page_title + " | " + basic_title
  end

  def image_rails
    image_tag Settings.image.url, alt: Settings.image.name,
      width: Settings.image.width, height: Settings.image.height
  end
end
