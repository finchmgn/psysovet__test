$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        items:1,
        loop:true,
        stagePadding: 15,
        margin:10,
        responsive:{
            992:{
                items:2,
                stagePadding: 15
            },
            1366:{
                items:3,
                stagePadding: 50,
            }
        }
    });
});


   $(function() {
      $('#example').barrating('show',{
        theme: 'fontawesome-stars'
      });
   });