// view the data visualization for the week
// includes pie chart and tips 


import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Doughnut} from 'react-chartjs-2';
// NOTE: have to do npm install --save chart.js 





export default class ViewWeek extends Component {
  constructor(props) {
    super(props);    
    this.onChangeSales = this.onChangeSales.bind(this);
    this.onChangeEcomm = this.onChangeEcomm.bind(this);
    this.onChangeSocial = this.onChangeSocial.bind(this);
    this.onChangeAds = this.onChangeAds.bind(this);
    this.onChangeOther = this.onChangeOther.bind(this);

    this.onChangeDate = this.onChangeDate.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        sales: 0,
        ecomm: 0,
        social: 0,
        ads: 0,
        other: 0,
        conTip: "",
        proTip: "",
        date: new Date()
        //users: []
      }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/weeks/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          // username: response.data.username,
          sales: response.data.sales,
          ecomm: response.data.ecomm,
          social: response.data.social,
          ads: response.data.ads,
          other: response.data.other,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    // axios.get('http://localhost:5000/users/')
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         users: response.data.map(user => user.username),
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

  }

  // onChangeUsername(e) {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }

  onChangeSales(e) {
    this.setState({
      sales: e.target.value
    })
  }

  onChangeEcomm(e) {
    this.setState({
      ecomm: e.target.value
    })
  }

  onChangeSocial(e) {
    this.setState({
      social: e.target.value
    })
  }

  onChangeAds(e) {
    this.setState({
      ads: e.target.value
    })
  }

  onChangeOther(e) {
    this.setState({
      other: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  // onSubmit(e) {
  //   e.preventDefault();

  //   const week = {
  //     sales: this.state.sales,
  //     ecomm: this.state.ecomm,
  //     social: this.state.social,
  //     ads: this.state.ads,
  //     other: this.state.other,
  //     date: this.state.date
  //   }



  // componentDidMount() {

    // this.graph = {
    //   labels: ['January', 'February', 'March',
    //            'April', 'May'],
    //   datasets: [
    //     {
    //       label: 'Rainfall',
    //       backgroundColor: [
    //         '#B21F00',
    //         '#C9DE00',
    //         '#2FDE00',
    //         '#00A6B4',
    //         '#6800B4'
    //       ],
    //       hoverBackgroundColor: [
    //       '#501800',
    //       '#4B5000',
    //       '#175000',
    //       '#003350',
    //       '#35014F'
    //       ],
    //       data: [65, 59, 80, 81, 56]
    //     }
    //   ]
    // }

    // axios.get('http://localhost:5000/weeks/'+this.props.match.params.id)
    //   .then(response => {
    //     this.setState({
    //       sales: response.data.sales,
    //       ecomm: response.data.ecomm,
    //       social: response.data.social,
    //       ads: response.data.ads,
    //       other: response.data.other,
    //       date: new Date(response.data.date)
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })

      // this.set = {
      //   labels: ['eComm, Social Media, Ads, Other'],
      //   datasets: [
      //       {
      //           label: "Effectiveness",
      //           data: [this.ecomm, this.social, this.ads, this.other]
      //       }
      //   ]
      // }  




  //}

  proTipCreate() {
    var max = Math.max(this.state.ecomm, this.state.social, this.state.ads, this.state.other);
    console.log(max);

    var msg = "";

    if(this.state.ecomm ==  max){
      msg = "Try asking about ways to improve your E-Commerce store as this seems to be a strong sales channel!";
    }
    else if(this.state.social == max) {
      msg = "Social media seems to be working! Ask for ways to fuel even more growth.";
    }
    else if(this.state.ads == max) {
      msg = "WooHoo, online advertisments seem to be paying off. Ask about new ways to grow your digital marketing channel.";
    }
    else{
      msg = "Your work is paying off. Ask about even more ways to grown your business!";
    }
    this.state.proTip = msg;
  }

  conTipCreate() {
    var min = Math.min(this.state.ecomm, this.state.social, this.state.ads, this.state.other);
    console.log(min);

    var msg = "";

    if(this.state.ecomm ==  min){
      msg = "We recommend to ask about potential E-Commerce tools that can help drive sales.";
    }
    else if(this.state.social == min) {
      msg = "Perhaps try asking about ways to improve your social media presence to attract new customers to your business.";
    }
    else if(this.state.ads == min) {
      msg = "Online advertisments did not seem to go well. Maybe its a matter of investing a little more to attract new customers. We recommend you talk about this!";
    }
    else{
      msg = "Feel free to ask us about new ways to grow your business.";
    }
    this.state.conTip = msg;
  }



  render() {
    this.proTipCreate();
    this.conTipCreate();

    //const a = this.state.ecomm;
    const state = {
      labels: ['Ecomm', 'Social', 'Ads',
               'Other'],
      datasets: [
        {
          label: 'Types',
          backgroundColor: [
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
            '#00A6B4'
          ],
          hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350'
          ],
          data: [this.state.ecomm, this.state.social, this.state.ads, this.state.other]
        }
      ]
    }

    return (
      <div id="view-week"> 
        <h3>Week in Summary</h3>
        {/* <Doughnut
          data={this.set}
          options={{
            title:{
              display:true,
              text:'Week in Review',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        /> */}
        {/* <p>{a}</p> */}
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'week in review',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        <div className="week-space"></div>
        <p>{this.state.proTip}</p>
        <p>{this.state.conTip}</p>
      </div>
    )
  }
} 