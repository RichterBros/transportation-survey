$(document).ready(function(){
    $("form#transportation_survey").submit(function(event){
      event.preventDefault();
      $("#work-responses").empty();
      $("#work-responses").toggle();
      $("input:checkbox[name=work-transportation]:checked").each(function(){
        var workTransportationMode = $(this).val();
        $('#work-responses').append(workTransportationMode + "<br>");
      });
      $("#fun-responses").empty();
      $("#fun-responses").toggle();
      $("input:checkbox[name=fun-transportation]:checked").each(function(){
        var funTransportationMode = $(this).val();
        $('#fun-responses').append(funTransportationMode + "<br>");
      });
      $('#work-boxes, #fun-boxes').toggle();
    });
  });