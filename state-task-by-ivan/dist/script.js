class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { class: "app" }, /*#__PURE__*/
      React.createElement("div", { class: "counter" }, "10"), /*#__PURE__*/
      React.createElement("div", { class: "controls" }, /*#__PURE__*/
      React.createElement("button", null, "INC"), /*#__PURE__*/
      React.createElement("button", null, "DEC"), /*#__PURE__*/
      React.createElement("button", null, "RND"), /*#__PURE__*/
      React.createElement("button", null, "RESET"))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, { counter: 0 }), document.getElementById('app'));

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов