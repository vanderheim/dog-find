Rails.application.routes.draw do
  get "app", to: "dogs#index"
  #get "users", to: "users#index"
  resources :dogs
  root to: 'welcome#index'
end
