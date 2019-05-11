import React, { Component } from "react";
import { chart1 } from "./dashboard.configs";
import { Grid, Paper } from "@material-ui/core";
import Chart from "chart.js";
import "./dashboard.styles.scss";

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var ctx = document.getElementById("myChart").getContext("2d");
    // eslint-disable-next-line
    new Chart(ctx, chart1);
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <Paper className="paper" elevation={1}>
              <canvas id="myChart" />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Inbox;
