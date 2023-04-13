class TutorLearner < ApplicationRecord
  belongs_to :tutor
  belongs_to :learner
end
