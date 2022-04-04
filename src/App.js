import React from "react";

export default class App extends React.Component {
  state = {
    fruits: [
      { name: "Cherry", price: "15" },
      { name: "Pineapple", price: "4.8" },
      { name: "Lime", price: "4.9" },
      { name: "Orange", price: "5.8" },
      { name: "BlueBerry", price: "7.8" },
      { name: "Grape", price: "9" },
      { name: "Watermelon", price: "7" },
      { name: "Pear", price: "7.5" },
      { name: "Strawberry", price: "5.40" },
      { name: "Banana", price: "2.33" }
    ],
    promotionList: []
  };

  handlePromo = () => {
    this.setState({
      promotionList: this.state.fruits.filter((item) => item.price < 5)
    });
  };

  render() {
    return (
      <>
        <h1>On sale</h1>
        <button onClick={this.handlePromo}>Promo</button>
        <h3>
          {this.state.promotionList.map((item) => (
            <ul>
              <li>{item.name}</li>
            </ul>
          ))}
        </h3>
      </>
    );
  }
}
