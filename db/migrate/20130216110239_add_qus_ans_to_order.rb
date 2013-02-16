class AddQusAnsToOrder < ActiveRecord::Migration
  def change
    add_column :spree_orders, :qus, :string
    add_column :spree_orders, :ans, :string
  end
end
