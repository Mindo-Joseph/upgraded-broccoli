require 'sidekiq/web'

Rails.application.routes.draw do
  get 'tutor/dashboard', to: 'tutor_dashboard#index', as: 'tutor_dashboard'

    authenticate :user, lambda { |u| u.admin? } do
      mount Sidekiq::Web => '/sidekiq'
    end


  devise_for :users, controllers: {registrations: 'registrations'}
  root to: 'home#index'
  get 'learner/dashboard', to: 'learner_dashboard#index', as: 'learner_dashboard'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
