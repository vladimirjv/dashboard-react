import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "./dashboard.styles";
import { Grid, Paper } from "@material-ui/core";
import Chart from "chart.js";

const myStyle = {
  chart: {
    paddingLeft: "2px",
    paddingRight: "2px"
  }
};
class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
    var ctx = document.getElementById("myChart").getContext("2d");
    // eslint-disable-next-line
    var myChart = new Chart(ctx, {
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
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <div className={this.props.classNames}>
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <Paper className={this.props.classes.root} elevation={1}>
              <canvas id="myChart" style={myStyle.chart} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Inbox);
