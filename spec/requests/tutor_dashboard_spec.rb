require 'rails_helper'

RSpec.describe "TutorDashboards", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/tutor_dashboard/index"
      expect(response).to have_http_status(:success)
    end
  end

end
