class CustomController < ApplicationController


 def assign_persons

order = Spree::Order.find_by_id(params[:order_id])
user = Spree::User.find_by_id(params[:id])
if params[:name] = "partner"
   respond_to do|format|
    if order.update_attributes(:partner_id => params[:id].blank? ? nil : params[:id])
	order.products.collect{|p| p.partner_id = params[:id].blank? ? nil : params[:id] 
 	p.save
	 }
	if user 
	  Spree::OrderMailer.assign_mail(order,user)	 		
	end
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
       if user 
	  Spree::OrderMailer.assign_mail(order,user)	 		
	end	
       format.js { render :json => {:valid => true} }
    else
       format.js { render :json => {:valid => false} }
    end 	
     end

end


 end
end
