class DogsController < ApplicationController
    def index
      @dogs = Dog.all
      render json: @dogs
    end
  
    def create
      @dog = Dog.new(dog_params)
      if @dog.save
        render json: { status: :ok, message: 'Success' }
      else
        render json: { json: @dog.errors, status: :unprocessable_entity }
      end
    end
  
    def show
      @dog = Dog.find(params[:id])
      render json: { data: @dog, status: :ok, message: 'Success' }
    end
  
    def update
      @dog = Dog.find(params[:id])
      if @dog.update(dog_params)
        render json: { status: :ok, message: 'Success' }
      else
        render json: { json: @dog.error, status: :unprocessable_entity }
      end
    end
  
    def destroy
      @dog = Dog.find(params[:id])
      if @dog.destroy
        render json: { json: 'Dog was successfully deleted.'}
      else
        render json: { json: @dog.errors, status: :unprocessable_entity }
      end
    end
  
    private
  
    def dog_params
      params.require(:dog).permit(:id, :url)
    end
  end