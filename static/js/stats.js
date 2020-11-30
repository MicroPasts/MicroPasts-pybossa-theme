$( document ).ready(function() {
  let endpoint = ''
    $.ajax({
        url: endpoint,
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            console.log(result);
        }
    });
});
