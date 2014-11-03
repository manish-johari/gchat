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
    # devise_for :users, controllers: { sessions: "api/sessions" }
    devise_scope :user do
      post 'users/sign_in' => 'sessions#create'
      get 'user/sign_out' => 'sessions#destroy'
      post 'user/password' => 'passwords#create'
      put 'user/password' => 'passwords#update'
    end

  end

end
