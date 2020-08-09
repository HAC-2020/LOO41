import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Line } from "react-chartjs-2";

const API = 'https://pomber.github.io/covid19/timeseries.json';

export default class MainGraph extends Component {
  constructor(props) {
    super(props);
        this.dates = [];
        this.sales = [];
        //this.current = {};
        //this.past = {};
        this.difference = 0;
        this.percent = 0;
        this.country = "Canada";
    //this.deleteWeek = this.deleteWeek.bind(this)

    this.state = {weeks: [], current: {}, past: {}};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/weeks/')
      .then(response => {
        this.setState({ weeks: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
    fetch(API)
    .then(response => response.json())
    .then(data => {
      this.setState({current: data[this.country][data[this.country].length - 1]}); 
      this.setState({past: data[this.country][data[this.country].length - 8]}); 
      this.findChange();
    });
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

  findChange() {
    var activeNow = this.state.current.confirmed - this.state.current.deaths - this.state.current.recovered;
    var activeThen = this.state.past.confirmed - this.state.past.deaths - this.state.past.recovered;
    this.difference = activeThen - activeNow;
    this.percent = Math.round(this.difference*100/activeThen); // this is the value ur working with (this.percent)
    var hi = 0;
    // u can write the code in this function or make a new one and call it
  }

  render() {
    this.datesList();
    this.salesList();
    this.findChange();
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
    
    const num = this.percent;
    console.log(num);
    //console.log(this.sales);
    return (
      <div>
        <h3>Welcome!</h3>
        <h6>Create a new log to track your growth, and see it reflect on this graph!</h6>
        <Line data={data} />
        {/* this is the number u can see it at the bottom of the page */}
        <h4>YOUR LOCATION: {this.country}</h4>
        <h4>Active cases change from last week: {num}%</h4> 
      </div>
    )
  }
}