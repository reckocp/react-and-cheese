class Cheese < ActiveRecord::Base
  has_many :favorites
  has_many :users, :through => :favorites
  accepts_nested_attributes_for :users

end
