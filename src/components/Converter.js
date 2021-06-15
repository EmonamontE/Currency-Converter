import React from "react"

class Converter extends React.Component {
  render() {
    return(
      <div className="container">
        <h2>Конвертер валют</h2>
        <p>Введите строку формата "15 usd in rub" и получите нужное значение</p>
        <form 
          className="d-flex my-4"
          onSubmit={this.props.weatherMethod}
        >
          <input
            className="form-control me-2"
            type="text"
            name="city"
            placeholder="Введите запрос"/>
          <button className="btn btn-dark">Рассчитать</button>
        </form>
        {/* <div className="fs-4"> */}
          {/* { this.props.city &&
            <div>
              <p>Местоположение: {this.props.city}, {this.props.country}</p>
              <p>Температура: {this.props.temp}</p>
              <p>Ветер: {this.props.wind} м/с</p>
              <p>Атмосферное давление: {this.props.pressure} мм</p>
            </div>
          }
          <p>{this.props.error}</p>
        </div> */}
      </div>
    );
  }
}

export default Converter;
