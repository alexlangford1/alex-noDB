import React, { Component } from "react";
import Img from "./Img";

class ImgList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgClose: true,
    };
  }
  imageClose = () => {
    this.setState({ imgClose: false });
  };
  render() {
    const results = this.props.data;
    let imgs;
    if (results.length >= 0) {
      imgs = results.map((img) => (
        <Img
          imageClose={this.imageClose}
          imageClick={this.props.imageClick}
          url={img.urls.thumb}
          img={img.urls.raw}
          user={img.user.links.html}
          name={img.user.name}
          link={img.links.html}
          key={img.id}
        />
      ));
    }
    return this.state.imgClose ? (
      <section className="img-list">{imgs}</section>
    ) : (
      <div />
    );
  }
}

export default ImgList;
