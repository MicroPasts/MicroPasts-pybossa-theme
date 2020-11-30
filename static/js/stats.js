$( document ).ready(function() {
  let endpoint = 'https://crowdsourced.fitz.ms/api/globalstats';
    $.ajax({
        url: endpoint,
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            console.log(result);
        }
    });
});
