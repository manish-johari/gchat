Rails.application.routes.draw do

  devise_for :users, controllers: { omniauth_callbacks: "web/omniauth_callbacks" }

  scope module: 'web' do
    root to: 'home#index', :as => :root
  end

end
