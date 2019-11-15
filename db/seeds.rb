User.create!(name: "Example User", email: "example@gmail.com",
  password: "foobar", password_confirmation: "foobar", admin: true,
  activated: true, activated_at: Time.zone.now)

30.times do |n|
  name = FFaker::Name.name
  email = "example-#{n+1}@gmail.com"
  password = "password"
  User.create!(name: name, email: email,
    password: password, password_confirmation: password,
    activated: true, activated_at: Time.zone.now)
end

users = User.order(:create_at).take(6)

50.times do
  content = FFaker::Lorem.sentence
  users.each { |user| user.microposts.create!(content: content) }
end

users = User.all
user = users.first
following = users[2..30]
followers = users[3..30]
following.each { |followed| user.follow(followed) }
followers.each { |follower| follower.follow(user) }
