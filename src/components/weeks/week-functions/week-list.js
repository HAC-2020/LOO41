import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Week = props => (
  <tr>
    <td>{props.week.sales}</td>
    <td>{props.week.ecomm}</td>
    <td>{props.week.social}</td>
    <td>{props.week.ads}</td>
    <td>{props.week.other}</td>
    <td>{props.week.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.week._id}>edit</Link> | <a href="#" onClick={() => { props.deleteWeek(props.week._id) }}>delete</a>
    </td>
  </tr>
)

export default class WeeksList extends Component {
  constructor(props) {
    super(props);

    this.deleteWeek = this.deleteWeek.bind(this)

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

  deleteWeek(id) {
    axios.delete('http://localhost:5000/weeks/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      weeks: this.state.weeks.filter(el => el._id !== id)
    })
  }

  weekList() {
    return this.state.weeks.map(currentweek => {
      return <Week week={currentweek} deleteWeek={this.deleteWeek} key={currentweek._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Weeks</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Sales</th>
              <th>Ecomm</th>
              <th>Social Media</th>
              <th>Ads</th>
              <th>Other</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.weekList() }
          </tbody>
        </table>
      </div>
    )
  }
}