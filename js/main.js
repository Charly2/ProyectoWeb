   smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 1800, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: true, // Boolean. If true, update the URL hash on scroll
    callback: function ( anchor, toggle ) {
        console.log(toggle);
        
    } // Function to run after scrolling
});



$("#secion2").add('#secion3').add('#secion4').css({"padding-top": ($("#menu_index").height()/2)});
var me = $("#menu_index");
var l = $("#imgl");
    var s = $("#secion2").height();
var aux = s;
   window.onscroll = function (){

    var scroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (scroll >= (s)) {
        
        //me.css({"background":"#ffffff"});
        me.css({"background":"#2B2C30"});
       l.css({border : '2px solid white'});
       $("#secion2").add('#secion3').add('#secion4').css({"padding-top": $("#menu_index").height()});
      
    }else{
      $("#secion2").add('#secion3').add('#secion4').css({"padding-top": ($("#menu_index").height()/2)});
      me.css({"background":"transparent"});
     l.css({border : '0'});


    }
    
//console.log(scroll + " - " + s);
  }



    $(document).ready(function() {
    $("#ok").hide();

    $("#form").validate({
        rules: {
            form_nombre: { required: true, minlength: 2},
            form_email: { required:true, email: true},
            form_mensaje: { required:true, minlength: 2}
        },
        messages: {
            form_nombre: "Debe introducir su nombre.",
            form_email : "Debe introducir un email válido.",
            form_mensaje : "El campo Mensaje es obligatorio.",
        },
        submitHandler: function(form){


            var dataString = 'form_nombre='+$('#form_nombre').val()+'&form_email='+$('#form_email').val()+'form_mensaje='+$('#form_mensaje').val();
            console.log(dataString);
            $.ajax({
                type: "POST",
                useDefaultXhrHeader: false,
                url:"/comida/send.php",
                data: dataString,
                dataType: 'json',
                success: function(data){
                    console.log(data);
                      $('#form_nombre').val()= "";
                      $('#form_email').val()= "";
                      $('#form_mensaje').val()= "";

                }
            });
        }
    });
});