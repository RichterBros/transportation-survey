$(document).ready(function(){
    $("form#transportation_survey").submit(function(event){
      event.preventDefault();
      $("#work-responses").empty();
      $("#work-responses").toggle();
      $("input:checkbox[name=work-transportation]:checked").each(function(){
        var workTransportationMode = $(this).val();
        $('#work-responses').append(workTransportationMode + "<br>");
        console.log(workTransportationMode);
    });
    
    $("#formHide").toggle();
      
    });
  });
