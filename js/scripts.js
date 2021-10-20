$(document).ready(function(){ 
  $("#formOne").submit(function(event) {
    event.preventDefault();

    $(".yourName").text($("input#yourName").val());
    $(".appDate").text($("input#appDate").val());
    $(".startTime").text($("input#startTime").val());
    $(".endTime").text($("input#endTime").val());
    $(".appDescription").text($("input#appDescription").val());

    $("#details").show();
  });
});