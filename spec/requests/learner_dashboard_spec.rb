require 'rails_helper'

RSpec.describe "LearnerDashboards", type: :request do
  describe "GET /indec" do
    it "returns http success" do
      get "/learner_dashboard/indec"
      expect(response).to have_http_status(:success)
    end
  end

end
