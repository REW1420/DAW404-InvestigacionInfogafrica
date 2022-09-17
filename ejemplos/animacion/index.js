$(document).ready(function(){

    $sp = $('.sp');
    $auto = $('.auto')
    $img = $('.auto img');
    let luz = true

    const autoS = ['/ejemplos/animacion/assets/Img_05.png','/ejemplos/animacion/assets/Img_06.png']

    $(document).on('keypress', function(e){
       if(e.which == 13){
        $($sp).toggleClass("movimiento");
        $($auto).toggleClass("terreno");

       };
    })

    $(document).on('keypress', function(e){
        if(e.which==119){
            if(luz){
                luz=false;
                $img.attr('src', autoS[0])


            }else{
                luz =true
                $img.attr('src', autoS[1])
            }
        }
     })

   

});