require "rails_helper"

RSpec.describe Dog, type: :model do

    before(:all) do
        @dog = Dog.create(url: "https://images.dog.ceo/breeds/maltese/n02085936_9310.jpg")
    end

    # Create Test
    it 'checks that a dog can be created' do
        expect(@dog).to be_valid
    end

    # Read Test
    it 'checks that a song can be read' do
        expect(Dog.find_by_url("https://images.dog.ceo/breeds/maltese/n02085936_9310.jpg")).to eq(@dog)
    end

    # Destroy Test
    it 'checks that a dog can be destroyed' do
        @dog.destroy
        expect(Dog.find_by(url: "https://images.dog.ceo/breeds/maltese/n02085936_9310.jpg")).to be_nil
    end
  end