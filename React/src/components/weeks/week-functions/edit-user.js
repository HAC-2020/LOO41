import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeBusiness = this.onChangeBusiness.bind(this);
    this.onChangeType = this.onChangeType.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        business: '',
        type: 0  
      }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/profile/:5f2f901449bdd3302576a00f')
      .then(response => {
        this.setState({
          business: response.data.business,
          type: response.data.type
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
    }

  onChangeBusiness(e) {
    this.setState({
      business: e.target.value
    })
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      business: this.state.business,
      type: this.state.type
    }

    console.log(user);

    axios.post('http://localhost:5000/profile/:5f2f901449bdd3302576a00f')
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
     <div>
        <h3>Edit Profile</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Business Name: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.business}
                onChange={this.onChangeBusiness}
                />
          </div>
  
          <div className="form-group"> 
            <label>Business Type (Left for Goods, Right for Service): </label>
              <div class="slidecontainer">
                  <input type="range" required min="0" max="1" value="0" class="slider" 
                          id="myRange" value={this.state.type} onChange={this.onChangeType}/>
              </div>
          </div>
  
          <div className="form-group">
            <input type="submit" value="Edit Week" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}