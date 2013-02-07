class Addassosiation < ActiveRecord::Migration
  def change
    add_column  :spree_products,:partner_id, :integer
    add_column  :spree_products,:salerepresentative_id, :integer
    add_column  :spree_orders,:partner_id, :integer
    add_column  :spree_orders,:salerepresentative_id, :integer	
  end
end
