Spree::Product.class_eval do
 belongs_to :partner, :class_name => 'User'
 belongs_to :salerepresentative, :class_name => 'User'
 
end
