<script type="text/javascript">
  console.log(projectStats.hourStats);

  var ctx = document.getElementById("userAnsHours");
  var data = {
      datasets: [
          {
              label : "Monday",
              data: [
                  {
                      x: 2,
                      y: 5,
                      r: 12
                  },
                  {
                      x: 6,
                      y: 5,
                      r: 8
                  },
                  {
                      x: 10,
                      y: 5,
                      r: 8
                  },
                  {
                      x: 14,
                      y: 5,
                      r: 6
                  },
                  {
                      x: 18,
                      y: 5,
                      r: 6
                  },
                  {
                      x: 22,
                      y: 5,
                      r: 2
                  },
                  {
                      x: 26,
                      y: 5,
                      r: 2
                  },
                  {
                      x: 30,
                      y: 5,
                      r: 6
                  },
                  {
                      x: 34,
                      y: 5,
                      r: 8
                  },
                  {
                      x: 38,
                      y: 5,
                      r: 12
                  },
                  {
                      x: 42,
                      y: 5,
                      r: 12
                  },
                  {
                      x: 46,
                      y: 5,
                      r: 10
                  },
                  {
                      x: 50,
                      y: 5,
                      r: 12
                  },
                  {
                      x: 54,
                      y: 5,
                      r: 8
                  },
                  {
                      x: 58,
                      y: 5,
                      r: 8
                  }

              ],
              backgroundColor:"#444",
              hoverBackgroundColor: "#FF6384",
          }
      ]
  };
  var myBubbleChart = new Chart(ctx,{
      type: 'bubble',
      data: data,
      options: {
          scales : {
              xAxes : [{
                  display : false,
                  ticks : {
                      beginAtZero : true,
                      max : 70
                  }
              }],
              yAxes : [{

                  ticks: {
                      beginAtZero : true,
                      max : 40,
                      stepSize : 10
                  }
              }]
          }
      }
  });
</script>
