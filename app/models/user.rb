class User < ApplicationRecord
has_person_name

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :role, presence: true, inclusion: {in: ['learner', 'tutor']}
  has_many :learners, class_name: 'User', foreign_key: 'tutor_id', dependent: :nullify, inverse_of: :tutor
  belongs_to :tutor, class_name: 'User', optional: true, inverse_of: :learners

  def tutor?
    role == 'tutor'
  end

  def learner?
    role == 'learner'
  end
end
