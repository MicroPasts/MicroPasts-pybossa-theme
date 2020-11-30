$( document ).ready(function() {
  let endpoint = 'https://crowdsourced.fitz.ms/api/globalstats';
    $.ajax({
        url: endpoint,
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            console.log(result);
            $("#projectCount").append(result.n_projects);
            $("#userCount").append(result.n_users);
            $("#completedTasks").append(result.n_tasks - result.n_pending_tasks);
        }
    });
});
