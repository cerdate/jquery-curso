
       $(document).ready(function(){

           $('#toggle_cars').click(function() {

               let hiddenCars = $('.cars_list li:hidden').length;
               
               if (hiddenCars > 0){
                $('.cars_list li').show();
               } else {
                $('.cars_list li').hide();
               }

               
           });
    
       });