
 
/*-------------------EVENTOS PARTE 1 ---------*/ 


     // Evento para quando pressionarmos o mouse
             
             /*
         $('h1').mousedown(function(){
                console.log('apertei o mouse');
             });
        */


    //Evento para quando soltarmos o mouse
        /*
        $('h1').mouseup(function(){
                console.log('soltei o  botao mouse');
             });
         */  
    

    // Evento para quando pressionamos e soltarmos mouse 
         /*$('h1').click(function(){
                console.log('apertei e solte o botão');
             });
  

         $('h3.books').click(() => {
                $(this).text('Fui clicado');

         });
       
     //Simulando o clique de elemento
          //$('h3.books').click()
  

    /* Evento para o botão direito do mouse
         $('img').contextmenu(function(){
         alert('Clicamos com botão direito');

          });
     */
    
    // Simulando o clique do botão direito  
        //  $('img').contextmenu() 
    

    /* Evento para o duplo clique
        $('table tbody tr').dblclick(function(){
           
            $(this).css({
                background:'black',
                color:'white'
            })
       
        });
      */

     // Simulando o duplo clique
       // $('table tbody tr:eq(0)').dblclick()


/*-------------------EVENTOS PARTE 2 ---------*/  

    // Evento para quando o cursor "passa por cima" (entra) em um elemento
    /*  $('table tbody tr').mouseenter(function(){
   
         $(this).addClass('trselected');    
        
        });   

    // Evento para quando cursor "deixa" um elemento
       $('table tbody tr').mouseleave(function(){
        
        $(this).removeClass('trselected');
   
        });
      */
    //  Evento para quando o cursor "entra" e "deixa" um elemento
    $('table tbody tr').hover(function(){
       
        $(this).addClass('trselected');

   }, function(){

       $(this).removeClass('trselected');
   });

   //Evento para quando o mouse se movimenta dentro de um elemento
  
     /* $('table tbody tr').mousemove(function(){
       
     $('h1').text(`Você está na posição X ${event.pageX};Y${event.pageY}`);
      
     console.log()

    });
*/

