$(document).ready(function() {


  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
  $("#sidebar-button").click(function () {
    if($('.sidebar-container').hasClass('sidebar-active')) {
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
    } else{
      $('#sidebar-button').addClass('button-active');
      $('.sidebar-container').addClass('sidebar-active');
      $('.page-wrapper').addClass('wrapper-active');
      setTimeout(function(){
        $('body').addClass('no-scroll');
      },300);
    }
  })

  $(".page-wrapper").click(function() {
          if($('.sidebar-container').hasClass('sidebar-active')) {
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
    } 
      })

  //Implement the "slide to left" when the user clicks on #carousel-next here

  //Implement the "slide to right" when the user clicks on #carousel-prev here

  $("#carousel-next").click(function() {
      var x = parseInt($('#carousel').css('margin-left').replace("px",""));
          if (x == -3840){
            return false;
          } else{
            var y = x - 960;
            $("#carousel").css('margin-left', y);
          }
    updateLabels;
  })

  $("#carousel-prev").click(function() {
      var x = parseInt($('#carousel').css('margin-left').replace("px",""));
          if (x == 0){
            return false;
          } else{
            var y = x + 960;
            $("#carousel").css('margin-left', y);
          }

    //updateLabels();
  })


});