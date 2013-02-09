Spree::User.class_eval do
 scope :partner, lambda { includes(:spree_roles).where("#{Spree::Role.table_name}.name" => "partner") }
 scope :representative, lambda { includes(:spree_roles).where("#{Spree::Role.table_name}.name" => "representative") }
end
