function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  $(document).ready(function() {
    $(".clickable1").click(function() {
      $(".modal1").toggle();
    });
  });

  $(document).ready(function() {
    $(".clickable2").click(function() {
      $(".modal2").toggle();
    });
  });
  

  

 

