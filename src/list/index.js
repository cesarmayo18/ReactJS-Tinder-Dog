import React from 'react';
import './style.scss';

export default class List extends React.Component {
  render() {
    const images = this.props.images.map((image, i) => (
      <img onClick={() => this.props.changeList(i)} src={image}/>)
    );
    return (
      <div className="list">
        {images}
      </div>
    )
  }
}