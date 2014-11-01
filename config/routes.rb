Rails.application.routes.draw do

  devise_for :users, controllers: { sessions: "web/sessions", omniauth_callbacks: "web/omniauth_callbacks" }

  scope module: 'web' do
    root to: 'home#index', :as => :root
    resources :users do
      get 'edit_profile', to: 'profile#edit'
      get 'profile', to: 'profile#index'
    end
  end

end
