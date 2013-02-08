Spree::Product.class_eval do
 belongs_to :partner, :class_name => 'User'
 belongs_to :salerepresentative, :class_name => 'User'
 before_save :assign_user
 def assign_user
  self.partner_id = Spree::User.current.id if Spree::User.current.has_spree_role?('partner') 		    
 end
end
