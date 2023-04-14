require 'sidekiq/web'

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/current', to: 'users#current'
    end
  end

  get 'help_center/index'
  get 'events/index'

  get 'tutor/dashboard', to: 'tutor_dashboard#index', as: 'tutor_dashboard'

    authenticate :user, lambda { |u| u.admin? } do
      mount Sidekiq::Web => '/sidekiq'
    end


  devise_for :users, controllers: {registrations: 'registrations'}
  root to: 'home#index'
  get 'learner/dashboard', to: 'learner_dashboard#index', as: 'learner_dashboard'
  get 'community', to: 'community#index', as: :community
  get 'events', to: 'events#index', as: :events
  get 'help_center', to: 'help_center#index', as: :help_center

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
