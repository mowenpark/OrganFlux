# == Route Map
#
# Prefix Verb URI Pattern Controller#Action
#   root GET  /           static_pages#index
#

Rails.application.routes.draw do

  root to: "static_pages#index"

end
