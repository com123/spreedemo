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
//= require admin/spree_social_products
//= require_tree .

//= require admin/spree_customrole
//= require admin/spree_social

$(document).ready(function() {
    $('.assignpartener').change(function() {
      id =  $(this).val();
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
		  alert("success")
			}else{
		  alert("error") 				
		}
            },
            error : function(jqXHR, textStatus, errorThrown) {
                alert("ggggggtttt")	
            }
        });
   });
    
});

