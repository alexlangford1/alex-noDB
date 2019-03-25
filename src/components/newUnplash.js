import React, { Component } from "react";
import axios from "axios";
import ImgList from "./ImgList";
import SearchForm from "./SearchForm";

export default class Unsplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [],
    };
  }

 

  performSearch = (query = "sun") => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=6&query=${query}&client_id=${
          process.env.REACT_APP_ACCESS_KEY
        }`,
      )
      .then((data) => {
        this.setState({ imgs: data.data.results });
      })
      .catch((err) => {
        console.log("Error happened during fetching!", err);
      });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div>
          <ImgList
            data={this.state.imgs}
            imageClick={this.props.imageClick}
          />
        </div>
      </div>
    );
  }
}
