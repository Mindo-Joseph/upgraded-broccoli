require 'rails_helper'

RSpec.feature "Authentications", type: :feature do
  # successful registration
  scenario 'New user registers with valid information' do
    visit "/users/sign_up"
    fill_in "Name", with: "John Doe"
    fill_in "Email", with: "john@example.com"
    fill_in "Password", with: "password123"
    fill_in "password_confirmation_field", with: "password123"
    select "Learner", from: "Role"

    click_on "sign_up_btn"

     expect(page).to have_content(/(?<!\w)Welcome! You have signed up successfully.(?!\w)/)
  end
  # failed registration(Invalid data, missing fields)
  scenario "User tries to register with missing required fields" do
    visit "/users/sign_up"

    click_on "sign_up_btn"

    expect(page).to have_content "Email can't be blank"
    expect(page).to have_content "Password can't be blank"
    # expect(page).to have_content "Role can't be blank"

  end


  # successful login
  scenario "User logs in with valid credentials " do
    # Use a valid User FactoryBot or create one manually in the test
    user = FactoryBot.create(:user, email: "test@example.com", password: "testpassword")

    visit "/users/sign_in"

    fill_in "Email", with: "test@example.com"
    fill_in "Password", with: "testpassword"

    click_on "sign_in_btn"

    expect(page).to have_content "Signed in successfully."
  end
  # failed login
    scenario "User fails to log in with incorrect credentials" do
    visit "/users/sign_in"

    fill_in "Email", with: "wrong@example.com"
    fill_in "Password", with: "wrongpassword"

    click_on "sign_in_btn"

    expect(page).to have_content "Invalid Email or password."
  end
  # password recovery
  # scenario "User successfully resets their password" do
  #   user = FactoryBot.create(:user, email: "user@example.com", password: "oldpassword")
  #   visit '/users/password/new'
  #   fill_in "email_reset", with: "user@example.com"
  #   click_on "password_reset_instructions"

  #   reset_email = ActionMailer::Base.deliveries.last
  #   expect(reset_email.to).to include "user@example.com"
  #   expect(reset_email.body.encoded).to match /reset_password_token/

  #   token = reset_email.body.match(/reset_password_token=(?<token>[^"]+)/)[:token]
  #   visit "/users/password/edit?reset_password_token=#{token}"
  #   fill_in "New password", with: "newpassword"
  #   fill_in "Confirm new password", with: "newpassword"
  #   click_on "Change my password"

  #   visit "/users/sign_in"
  #   fill_in "user_email", with: "user@example.com"
  #   fill_in "Password", with: "newpassword"
  #   click_on "sign_in_btn"

  #   expect(page).to have_content("Signed in successfully.")

  # end

  # role based authorization

end
