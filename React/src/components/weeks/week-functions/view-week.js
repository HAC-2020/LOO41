// view the data visualization for the week
// includes pie chart and tips 


import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Doughnut} from 'react-chartjs-2';
import * as firebase from 'firebase';
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
    var db = firebase.firestore();
    db.collection("users").get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().name);
            var age = doc.data().age;
            console.log(age);
            this.setState({
              // username: response.data.username,
              sales: doc.data().sales,
              ecomm: doc.data().ecomm,
              social: doc.data().social,
              ads: doc.data().ads,
              other: doc.data().other,
              date: new Date(doc.data().date)
            });
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    

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

  //0-5
  proTipCreate() {
    var max = Math.max(this.ecomm, this.social, this.ads, this.other);
    console.log(max);
    
    
  }

  conTipCreate() {
    
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
        <p>{ this.state.sales }</p>
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
      </div>
    )
  }
}