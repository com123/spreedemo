// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs

//= require admin/spree_core
//= require admin/spree_promo
//require admin/spree_social_products
//= require_tree .

// require admin/spree_customrole
//= require admin/spree_social

$(document).ready(function() {




$('.assignrep').change(function() {
      id =  $(this).val();
var assign = ""

if(id != "")
{
  $(this).parent().next().find('select').prop('disabled', true);
  assign = "Order successfully assigned"			
}else
{
$(this).parent().next().find('select').prop('disabled', false);
assign = "Order assigment remove"	
}
      order_id = $(this).attr('data_order');
      name = $(this).attr('name'); 
        $.ajax({
            url: '/custom/assign_persons',
            dataType : 'json',
            type:'get',
            data: {'id':id,
		   'order_id':order_id,
                   'name':name  	},
            success: function(data, textStatus, jqXHR) {
                if(data.valid)
   		{
		  alert(assign)
			}else{
		  alert("Some Thing Went Wrong ") 				
		}
            },
            error : function(jqXHR, textStatus, errorThrown) {
                alert("Some Thing Went Wrong")	
            }
        });
   });






    $('.assignpartener').change(function() {
      id =  $(this).val();
var assign = ""
if(id != "")
{
  $(this).parent().prev('td').find('select').prop('disabled', true);		
  assign = "Order successfully assigned"
}else
{
$(this).parent().prev('td').find('select').prop('disabled', false);
assign = "Order assigment remove"	
}

      order_id = $(this).attr('data_order');
      name = $(this).attr('name'); 
        $.ajax({
            url: '/custom/assign_persons',
            dataType : 'json',
            type:'get',
            data: {'id':id,
		   'order_id':order_id,
                   'name':name  	},
            success: function(data, textStatus, jqXHR) {
                if(data.valid)
   		{
		  alert(assign)
			}else{
		  alert("Some Thing Went Wrong ") 				
		}
            },
            error : function(jqXHR, textStatus, errorThrown) {
                alert("Some Thing Went Wrong")	
            }
        });
   });
    
});

