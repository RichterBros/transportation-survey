$(document).ready(function(){
    $("form#transportation_survey").submit(function(event){
      event.preventDefault();
      $("#work-responses").empty();
      $("#work-responses").toggle();
      var workResponses = [];
      console.log(workResponses);
      $("input:checkbox[name=work-transportation]:checked").each(function(){
        var workTransportationMode = $(this).val();
        workResponses.push(workTransportationMode);
        $('#work-responses').append(workTransportationMode + "<br>");
      });
      $("#fun-responses").empty();
      $("#fun-responses").toggle();
      var funResponses = [];
      console.log(funResponses);
      $("input:checkbox[name=fun-transportation]:checked").each(function(){
        var funTransportationMode = $(this).val();
        funResponses.push(funTransportationMode);
        $('#fun-responses').append(funTransportationMode + "<br>");
      });
      $('#work-boxes, #fun-boxes').toggle();
    });
  });