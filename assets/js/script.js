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

  // Implement show modal when click on login button, and hide modal when click on submit or cancel or on modal overlay
  $("#login").click(function() {
      $("#modal-container").show();  
  })

  $(".modal-footer-item").click(function() {
      $("#modal-container").hide();
  })

  $("#modal-overlay").click(function() {
      $("#modal-container").hide();
  })
});