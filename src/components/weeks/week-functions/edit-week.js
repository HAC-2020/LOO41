import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeSales = this.onChangeSales.bind(this);
    this.onChangeEcomm = this.onChangeEcomm.bind(this);
    this.onChangeSocial = this.onChangeSocial.bind(this);
    this.onChangeAds = this.onChangeAds.bind(this);
    this.onChangeOther = this.onChangeOther.bind(this);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        sales: this.sales,
        ecomm: 0,
        social: 0,
        ads: 0,
        other: 0,
        date: new Date()
        //users: []
      }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/weeks/'+this.props.match.params.id)
      .then(response => {
        this.setState({
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

  onSubmit(e) {
    e.preventDefault();

    const week = {
        sales: this.state.sales,
        ecomm: this.state.ecomm,
        social: this.state.social,
        ads: this.state.ads,
        other: this.state.other,
        date: this.state.date
      }
  
    console.log(week);

    axios.post('http://localhost:5000/weeks/update/' + this.props.match.params.id, week)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
        <div>
        <h3>Edit Week Log</h3>
        <form onSubmit={this.onSubmit}>
          {/* <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div> */}
  
          <div className="form-group"> 
            <label>Net Sales: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.sales}
                onChange={this.onChangeSales}
                />
          </div>
  
          <div className="form-group"> 
            <label>eComm: </label>
              <div class="slidecontainer">
                  <input type="range" required min="0" max="5" value="0" class="slider" 
                          id="myRange" value={this.state.ecomm} onChange={this.onChangeEcomm}/>
              </div>
            {/* <input type="text"
                required
                className="form-control"
                value={this.state.ecomm}
                onChange={this.onChangeEcomm}
                /> */}
          </div>
  
          <div className="form-group"> 
            <label>Social Media: </label>
              <div class="slidecontainer">
                  <input type="range" required min="0" max="5" value="0" class="slider" 
                          id="myRange" value={this.state.social} onChange={this.onChangeSocial}/>
              </div>
          </div>
  
          <div className="form-group"> 
            <label>Ads: </label>
              <div class="slidecontainer">
                  <input type="range" required min="0" max="5" value="0" class="slider" 
                          id="myRange" value={this.state.ads} onChange={this.onChangeAds}/>
              </div>
          </div>
  
          <div className="form-group"> 
            <label>Other: </label>
              <div class="slidecontainer">
                  <input type="range" required min="0" max="5" value="0" class="slider" 
                          id="myRange" value={this.state.other} onChange={this.onChangeOther}/>
              </div>
          </div>
  
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
  
          <div className="form-group">
            <input type="submit" value="Create Week" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}