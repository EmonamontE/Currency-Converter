import React from "react"

class Home extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="mt-2">
          <h1>Вас приверствует валютный менеджер!</h1>
        </div>
        <div className="fs-4">
          <p>По умолчанию базовая валюта - рубли (RUB).</p>
          <p>Изменить базовую валюту можно в меню "Настройки".</p>
          <p>Конвертер дает возможность рассчитать нужную валюту исходя из текущего курса.</p>
          <p>"Курсы валют" дадут актуальную информацию о курсах с учетом Вашей базовой валюты.</p>
        </div>
      </div>
    );
  }
}

export default Home;
