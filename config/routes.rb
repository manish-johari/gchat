Rails.application.routes.draw do

  devise_for :users, controllers: { sessions: "web/sessions", omniauth_callbacks: "web/omniauth_callbacks" }

  scope module: 'web' do
    root to: 'home#index', :as => :root
    resources :users do
      get 'edit_profile', to: 'profile#edit'
      get 'profile', to: 'profile#index'
    end
    resources :settings, only: [:index]
    get 'deactivate' => "profile#deactivate"
  end

  namespace :api, defaults: {format: 'json'} do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
      devise_scope :user do
        post 'users/sign_in' => 'sessions#create'
        get 'users/sign_out' => 'sessions#destroy'
        post 'users/password' => 'passwords#create'
        put 'users/password' => 'passwords#update'
        post 'users/sign_up' => 'registrations#create'
        post 'users/confirmation' => 'confirmations#create'
      end
      post 'deactivate' => 'profile#deactivate'
    end

  end

end
