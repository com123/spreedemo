class CustomController < ApplicationController


 def assign_persons

order = Spree::Order.find_by_id(params[:order_id])
if params[:name] = "partner"
   respond_to do|format|
    if order.update_attributes(:partner_id => params[:id].blank? ? nil : params[:id])
	order.products.collect{|p| p.partner_id = params[:id].blank? ? nil : params[:id] 
 	p.save
	 }
	
       format.js { render :json => {:valid => true} }
    else
       format.js { render :json => {:valid => false} }
    end 	
     end
else
respond_to do|format|
    if order.update_attributes(:salerepresentative_id => params[:id].blank? ? nil : params[:id] )
	order.products.collect{|p| p.salerepresentative_id = params[:id].blank? ? nil : params[:id] 
 	p.save
	 }	
       format.js { render :json => {:valid => true} }
    else
       format.js { render :json => {:valid => false} }
    end 	
     end

end


 end
end
