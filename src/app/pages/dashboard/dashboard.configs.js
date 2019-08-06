export const ConfigDemo = function(theme) {
  var fontColor = "white";
  if (theme === "light") {
    fontColor = "white";
  } else {
    fontColor = "black";
  }
  var chart = {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: fontColor
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: fontColor
            }
          }
        ]
      },
      legend: {
        labels: {
          fontColor: fontColor
        }
      }
    }
  };
  return chart;
};
export const chart1 = {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: "white"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "white"
          }
        }
      ]
    },
    legend: {
      labels: {
        fontColor: "white"
      }
    }
  }
};
