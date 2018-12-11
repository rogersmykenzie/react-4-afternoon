import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }


  componentDidMount() {
    axios.get("http://localhost:3005/students?class=" + this.props.match.params.class)
      .then(response => {
        console.log(response);
        this.setState({students: response.data});
      })
  }

  render() {
      let mapped = this.state.students.map((val, i, arr) => {
        return <Link to={"/student/" + val.id} key={val.id}><h3>{val.first_name} {val.last_name}</h3></Link>
      })
    return (
      <div className="box">
        <Link to="/"><h1>Back</h1></Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mapped}
      </div>
    )
  }
}