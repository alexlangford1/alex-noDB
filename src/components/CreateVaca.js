import React, { Component } from "react";
import axios from "axios";
import Footer from "./footer";
import Vacation from "./vacation";
import Title from "./Title";
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      destination: "",
      arrival: "",
      depart: "",
      imageUrl: "",
      budget: 0,
      addButton: true,
      adder: this.props.adder,
    };
  }

  createVacation = (vacation) => {
    axios
      .post("/api/vacation", vacation)
      .then((res) => {
        this.setState({ vacations: res.data });
      })
      .catch((err) => console.log("errrrereree", err));
  };
  handleChange = (e) => {
    let { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleClick = () => {
    let { title, destination, arrival, depart, imageUrl, budget } = this.state;
    this.createVacation({
      title: title || "Vacation Time!",
      destination,
      arrival,
      depart,
      imageUrl:
        imageUrl ||
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      budget,
    });
    this.complicated();
  };
  complicated = () => {
    this.setState({ addButton: false });
  };

  addAdditional = () => {
    this.setState({ addButton: true });
  };

  render() {
    const { addButton } = this.state;
    if (this.state.adder === false) {
      this.complicated();
      this.setState({ adder: true });
    }
    return addButton ? (
      <section className="create">
        <div className="title-inputpage">
          <Title />
        </div>
        <input
          type="text"
          name="title"
          placeholder="Vacation Title"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          onChange={this.handleChange}
        />
        <input
          type="date"
          name="arrival"
          placeholder="Arrival Date"
          onChange={this.handleChange}
        />
        <input
          type="date"
          name="depart"
          placeholder="Departure Date"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image"
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="budget"
          placeholder="$ Budget"
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleClick}
          style={{ borderBottomStyle: "solid" }}
        >
          add
        </button>
        <Footer />
      </section>
    ) : (
      <Vacation addAdditional={this.addAdditional} />
    );
  }
}
export default Create;
