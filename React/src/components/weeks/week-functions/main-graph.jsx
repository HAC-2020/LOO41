import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Line } from "react-chartjs-2";


export default class MainGraph extends Component {
  constructor(props) {
    super(props);
        this.dates = [];
        this.sales = [];
    //this.deleteWeek = this.deleteWeek.bind(this)

    this.state = {weeks: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/weeks/')
      .then(response => {
        this.setState({ weeks: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  datesList() {
    this.dates=[];
    return this.state.weeks.map(currentweek => {
      this.dates.push(currentweek.date)
    })
  }

  salesList() {
    this.sales=[];
    return this.state.weeks.map(currentweek => {
      this.sales.push(currentweek.sales)
    })
  }

  render() {
    this.datesList();
    this.salesList();
    console.log(this.dates);
    console.log(this.sales);

    const data = {
        labels: this.dates,
        datasets: [
          {
            label: "Net sales",
            data: this.sales,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          }
        ]
      };
    //console.log(this.sales);
    return (
      <div>
        <h3>Welcome, </h3>
        <h2>COMPANY: X</h2>
        <Line data={data} />
        <h5>Notice: COVID notice goes here</h5>
      </div>
    )
  }
}