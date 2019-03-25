import React, { Component } from "react";
import Create from "./CreateVaca";
import Footer from "./footer";
import Title from "./Title";
class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      addBtn: true,
      addBtn2: false,
      adder: true,
    };
  }
  addHandler = () => {
    this.setState({ addBtn: false });
  };
  
  clickHandler = () => {
    this.setState({ addBtn2: true, adder: false });
  };

  render() {
    let { addBtn, addBtn2 } = this.state;
    if (addBtn === true && addBtn2 === false) {
      return (
        <header className="header">
          <button className="title-burger" onClick={() => this.clickHandler()}>
            <i className="fas fa-bars fa-2x" />
          </button>
          <Title />
          <h1 style={{ marginTop: "10px", fontSize: "100px" }}>
            Plan your vacation
          </h1>
          <br />
          <button
            onClick={() => this.addHandler()}
            style={{ borderBottomStyle: "solid" }}
          >
            Add New
          </button>
          <Footer />
        </header>
      );
    } else if (addBtn === true && addBtn2 === true) {
      return <Create adder={this.state.adder} />;
    } else {
      return <Create />;
    }
  }
}

export default Welcome;
