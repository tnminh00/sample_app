module ApplicationHelper
  def full_title page_title = ""
    basic_title = t "page.title.basic_title"
    page_title.empty? ? basic_title : page_title + " | " + basic_title
  end
end
