$(document).ready(function() {
  $("form#pol").submit(function(event) {
    event.preventDefault();

    const cars = $("#cars").val();
    const wake = $("#wake").val();
    const coffee = $("#coffee").val();
    
    if (cars === "4" && wake === "4" && coffee === "4" || cars === "2") {
      $("#liberal").show();
    } else if (cars === "1" && wake == "2" && coffee === "3") {
      $("#moderate").show();
    } else {
      $("#conservative").show();
    }
  });
})