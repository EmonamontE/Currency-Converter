import React from "react"

class Form extends React.Component {
  render() {
    return(
      <form 
        className="d-flex my-4"
        onSubmit={this.props.convertorMethod}
      >
        <input
          className="form-control me-2"
          type="text"
          name="request"
          placeholder="Введите запрос"/>
        <button className="btn btn-dark">Показать погоду</button>
      </form>
    );
  }
}

export default Form;
