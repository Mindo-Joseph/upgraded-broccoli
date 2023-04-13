require 'rails_helper'

RSpec.describe "HelpCenters", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/help_center/index"
      expect(response).to have_http_status(:success)
    end
  end

end
