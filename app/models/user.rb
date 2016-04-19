class User < ActiveRecord::Base
  has_secure_password
  has_many :favorites
  has_many :cheeses, :through => :favorites
  accepts_nested_attributes_for :cheeses

end
