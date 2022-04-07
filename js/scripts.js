$(document).ready(function() {
  $("form#pol").submit(function(event) {
    event.preventDefault();

    const cars = $("#cars").val();
    const wake = $("#wake").val();
    const coffee = $("#coffee").val();
    
    if (cars === "4" && wake === "4" && coffee === "4") {
      $("#liberal").show();
    } else if (cars === "3" && wake == "3" && coffee === "3") {
      $("#moderate").show();
    } else {
      $("#conservative").show();
    }
  });
})