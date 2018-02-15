import React from 'react';
import List from '../list';
import './style.scss';

const URL = 'https://dog.ceo/api/breeds/image/random';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: [],
      dislikes: [],
      current: ''
    }
    // this.handleLike = this.handleLike.bind(this);
  }

  changeToDislike = i => {
    const likes = this.state.likes.filter((...params) => params[1] != i);
    const dislikes = [ this.state.likes[i], ...this.state.dislikes]
    this.setState({likes, dislikes});
  }

  changeToLike = i => {
    const dislikes = this.state.dislikes.filter((img, index) => index != i);
    const likes = [ this.state.dislikes[i], ...this.state.likes]
    this.setState({likes, dislikes});
  }

  getDog() {
    fetch(URL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          current: response.message
        })
      }).catch(error => {
        console.log(error);
      });
  }

  handleDislike = () => {
    const dislikes = [this.state.current, ...this.state.dislikes]
    this.setState({ dislikes });
    this.getDog();
    console.log('no')
  }

  handleLike = () => {
    const likes = [this.state.current, ...this.state.likes]
    this.setState({ likes });
    this.getDog();
  }

    componentDidMount() {
      this.getDog();
    }

  render() {
    return (
      <div className="container">
        <List changeList={this.changeToLike} images={this.state.dislikes} />
          <div className="main">
            <img src={this.state.current} />
            <div className="buttons">
              <button onClick={this.handleDislike}>No</button>
              <button onClick={this.handleLike}>Si</button>
            </div>
          </div>
        <List changeList={this.changeToDislike} images={this.state.likes} />
      </div>
    )
  }
}