User.create!(name: "Example User", email: "example@gmail.com",
  password: "foobar", password_confirmation: "foobar", admin: true)

99.times do |n|
    name = FFaker::Name.name
    email = "example-#{n+1}@gmail.com"
    password = "password"
    User.create!(name: name, email: email,
      password: password, password_confirmation: password)
end
