import React, { Component } from "react";
import axios from "axios";

class Vacation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      destination: "",
      arrival: "",
      depart: "",
      imageUrl: "",
      budget: 0,
      vacations: [],
      editToggle: true,
      id: 0,
    };
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleEdit = () => {
    let {
      id,
      title,
      destination,
      arrival,
      depart,
      imageUrl,
      budget,
    } = this.state;
    this.editVacation({
      id,
      title,
      destination,
      arrival,
      depart,
      imageUrl,
      budget,
    });
  };
  deleteVaca = (id) => {
    axios
      .delete(`/api/vacation/${id}`)
      .then((res) => {
        this.setState({
          vacations: res.data,
        });
      })
      .catch((err) => console.log(" error!!!!!!", err));
  };

  editVacation = (vacay) => {
    axios
      .put(`/api/vacation/${vacay.id}`, vacay)
      .then((res) => {
        this.setState({
          vacations: res.data,
        });
      })
      .catch((err) => console.log("Edit error!!!!!!", err));
    this.editTogg();
  };

  componentDidMount() {
    axios.get("/api/vacation").then((res) => {
      this.setState({ vacations: res.data });
    });
  }

  editTogg = () => {
    this.setState({ editToggle: true });
  };

  handleClick = (id) => {
    this.setState({ editToggle: false, id });
  };

  render() {
    let { editToggle, vacations } = this.state;

    return editToggle ? (
      <div>
        {vacations.map((e) => {
          return (
            <div className="vacay-background">
              <header className="add-additional">
                <button
                  onClick={() => this.props.addAdditional()}
                  style={{ borderBottomStyle: "solid", margin: "10px" }}
                >
                  add
                </button>
              </header>
              <h1 className="yourVacay">Your Vacations</h1>
              <br />
              <img
                src={e.imageUrl}
                width="800px"
                height="530px"
                alt="img"
                style={{ borderRadius: "7px" }}
              />
              <section className="vacayboxwords">
                <div className="edit-buttons">
                  <button onClick={() => this.deleteVaca(e.id)}>X</button>
                  <button onClick={() => this.handleClick(e.id)}>
                    <i className="fas fa-bars 3x" />
                  </button>
                </div>
                <div className="word-background">
                  <h1>{e.title}</h1>
                  <h2>{e.destination}</h2>
                  <h2>{e.arrival}</h2>
                  <h2>{e.depart}</h2>
                  <h3>{`$${e.budget}`}</h3>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    ) : (
      <div className="vacay-background">
        <h1>Your Vacations</h1>
        <br />
        <div>
          <div className="create">
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
              onClick={() => this.handleEdit()}
              style={{ borderBottomStyle: "solid" }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Vacation;
