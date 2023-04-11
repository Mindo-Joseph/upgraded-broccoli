FactoryBot.define do
  factory :user do
    name {"John Doe"}
    email {"johndoe@gmail"}
    password{"password123"}
    role{"learner"}
  end
end
