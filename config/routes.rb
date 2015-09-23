Rails.application.routes.draw do
  root 'home#index'
  resources :home, only: [:index]
  resources :users, only: [:new, :create]
  resources :links, only: [:index, :create] do
    post 'read', to: 'read#create'
    delete 'read', to: 'read#destroy'
  end
  post '/login', to: 'sessions#create', as: :login
  delete '/logout', to: 'sessions#destroy', as: :logout
end
