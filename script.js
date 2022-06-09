
$(document).ready(function(){
    const arrayCartas = [
        {nombre: 'sailor1',
        img: 'https://i.postimg.cc/qM9StrMM/sailorpek1.jpg'},
       {nombre: 'sailor1',
       img: 'https://i.postimg.cc/qM9StrMM/sailorpek2.jpg'},
       {nombre: 'sailor2',
        img: 'https://i.postimg.cc/ZqQRG0xx/sailorpek2.jpg'},  
       {nombre: 'sailor2',
       img: 'https://i.postimg.cc/ZqQRG0xx/sailorpek2.jpg'}, 
       {nombre: 'sailor3',
       img: 'https://i.postimg.cc/vZfjfKc7/sailorpek3.jpg'},  
       {nombre: 'sailor3',
       img: 'https://i.postimg.cc/vZfjfKc7/sailorpek3.jpg'}, 
       {nombre: 'sailor4',
       img: 'https://i.postimg.cc/6QKP0hvk/sailorpek4.jpg'},
       {nombre: 'sailor4',
       img: 'https://i.postimg.cc/6QKP0hvk/sailorpek4.jpg'}, 
       {nombre: 'sailor5',
      img: 'https://i.postimg.cc/431SFhvm/sailorpek5.jpg'}, 
       {nombre: 'sailor5',
       img: 'https://i.postimg.cc/431SFhvm/sailorpek5.jpg'},
       {nombre: 'sailor6',
      img: 'https://i.postimg.cc/gJkT9k44/sailorpek6.jpg'},
        {nombre: 'sailor6',
       img: 'https://i.postimg.cc/gJkT9k44/sailorpek6.jpg'}
      ]; 



      arrayCartas.sort(()=> 0.5 - Math.random());

      $('#reiniciar').click(function(){
          location.reload();
      });

      
      var cartaElegida = [];
      var cartaElegidaId = [];
      var cartaGanada = [];

      function crearTablero(){
          for(let i=0; i<arrayCartas.length; i++){
             var carta = document.createElement('img');
             $(carta).attr('src','https://i.postimg.cc/kGBVpZZD/lunapek-delante.png');
             $(carta).attr('data-id',i); 
             $(carta).css('margin', '5px');
             $(carta).css('cursor', 'pointer');
             $(carta).click(girarCarta);
             $('.tablero').append(carta);  
             }      

        
      };//fin tablero

      //comprobar parejas
      function comprobarMatch(){
         var cartas = document.querySelectorAll('img');
         const carta1Id = cartaElegidaId[0];
         const carta2Id = cartaElegidaId[1];
         if(cartaElegida[0] === cartaElegida[1]){
           
            cartas[carta1Id].setAttribute('src', 'https://i.postimg.cc/0QtMZxVL/artemispek-acertada.png');
            cartas[carta2Id].setAttribute('src', 'https://i.postimg.cc/0QtMZxVL/artemispek-acertada.png');
            cartaGanada.push(cartaElegida);
            
             
            
         }else{
            cartas[carta1Id].setAttribute('src', 'https://i.postimg.cc/kGBVpZZD/lunapek-delante.png');
            cartas[carta2Id].setAttribute('src', 'https://i.postimg.cc/kGBVpZZD/lunapek-delante.png');   
            
         }

         cartaElegida=[];
         cartaElegidaId=[];
         $('span').text(cartaGanada.length);
         if(cartaGanada.length === arrayCartas.length/2){
             $('.titulo-parejas').hide();
             $('h4').html('<p>Felicidades: Has encontrado todas las parejas</p>');
             
         };
      };


      //girar cartas

      function girarCarta(){
          var cartaId = $(this).attr('data-id');
          if($(this).attr('src') !== 'https://i.postimg.cc/0QtMZxVL/artemispek-acertada.png'){
          cartaElegida.push(arrayCartas[cartaId].nombre);
          cartaElegidaId.push(cartaId);
          $(this).attr('src', arrayCartas[cartaId].img);
          if(cartaElegida.length == 2){
              setTimeout(comprobarMatch, 500);
          }; 
        }     

      };

     

      crearTablero();



});//fin document

