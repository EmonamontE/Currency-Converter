import React from "react"
import Info from "./Info"
import Form from "./Form"

class Converter extends React.Component {
  
  state = {
    usdInRub: 72.12,
    usdInEur: 0.82
  }

  moneyConverting = (e) => {
    e.preventDefault();
    console.log(e.target.elements.request.value);
  }

  render() {
    return(
      <div className="container">
        <Info />
        <Form convertorMethod={this.moneyConverting}/>
      </div>
    );
  }
}

export default Converter;
