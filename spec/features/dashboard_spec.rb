require 'rails_helper'

RSpec.feature "daahboard", type: :feature do
  scenario "Learner can access the dashboard" do
    user = FactoryBot.create(:user, email: "learner@example.com", password: "password", role: "learner")

    visit "/users/sign_in"
    fill_in "Email", with: "learner@example.com"
    fill_in "Password", with: "password"
    click_on "sign_in_btn"

    visit "/learner/dashboard" # Update this path according to your route
    expect(page).to have_content(/(?<!\w)Learner Dashboard(?!\w)/) # Update the expected content on the dashboard
  end

end

