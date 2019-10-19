import React, {Component} from 'react';
import axios from "axios"
import './api-practice.css';

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
    const image = this.state.myGithubDatas.avatar_url;
    const name = this.state.myGithubDatas.name;
    const created_at = this.state.myGithubDatas.created_at
    const updated_at = this.state.myGithubDatas.updated_at

    const convertDateJson = (date) => {
      if (date === undefined) {
        return undefined
      }
      const newdate = date.split("T")[0].replace(/-/g, "/");
      return newdate
    }
    return (
      <div className="Profile">
        <h1>My Github Profile</h1>
        <div className="Profile__ImageArea">
          <img src={image} alt="Profile__Image"/>
        </div>
        <div className="Profile__Name">
          <p>My name is {name}</p>
        </div>
        <div className="Profile__Created_at">
          <p>Github登録日: {convertDateJson(created_at)}</p>
        </div>
        <div className="Profile__Updated_at">
          <p>Github最終更新日: {convertDateJson(updated_at)}</p>
        </div>
      </div>
    );
  }
}
export default APIPractice;
