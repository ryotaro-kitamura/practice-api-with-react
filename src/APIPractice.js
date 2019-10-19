import React, {Component} from 'react';
import axios from "axios"
import './App.css';

class APIPractice extends Component {
  constructor() {
    super();
    this.state = {
      myGithubDatas: []
    };
  }

  componentWillMount() {
    const request = axios.create({
      baseURL: "https://api.github.com"
    })
    request.get("/users/ryotaro-kitamura")
      .then(res => {
        this.setState({
          myGithubDatas: res.data
        });
      })
      .catch((error)=>{
        console.log(error);
     });
  }

  render() {
    return (
      <div>{this.state.myGithubDatas.id}</div>
    );
  }
}
export default APIPractice;
