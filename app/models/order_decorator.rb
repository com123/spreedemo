Spree::Order.class_eval do
 belongs_to :partner, :class_name => 'User'
 belongs_to :salerepresentative, :class_name => 'User'
attr_accessible :partner_id , :representative_id
end
