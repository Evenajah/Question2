import React, { Component, Fragment } from "react";
import axios from "axios";
class Table extends Component {
  state = {
    events: [],
    input: "",
    storeItem: [],
  };
  componentDidMount() {
    axios({
      method: "get",
      url: "https://api.publicapis.org/categories",
    })
      .then((response) => {
        this.setState({ events: response.data, storeItem: response.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  textChangeHandler = (event) => {
    const itemMerge = [];

    this.setState(
      { input: event.target.value, events: itemMerge },
      function () {
        this.state.storeItem.forEach((item) => {
          if (item.includes(this.state.input)) {
            itemMerge.push(item);
          }
        });

        this.setState({
          input: event.target.value,
          events: itemMerge,
        });
      }
    );

    console.log(this.state.input);
  };
  render() {
    return (
      <Fragment>
        <table>
          <tr>
            <th>Name</th>
          </tr>
          <input type="text" onChange={this.textChangeHandler} />
          {this.state.events?.map((person, index) => (
            <tr>
              <td>{this.state.events[index]}</td>
            </tr>
          ))}
        </table>
      </Fragment>
    );
  }
}

export default Table;
