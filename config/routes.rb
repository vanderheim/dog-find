Rails.application.routes.draw do
  get "app", to: "dogs#index"
  resources :dogs
  root to: 'welcome#index'
  match "*path", to: "welcome#index", via: :all
end
