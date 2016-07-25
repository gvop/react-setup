import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    let txt = this.props.txt
    let cat = this.props.cat
    return  <h1>{txt}, {cat}</h1>
  }
}

App.PropTypes = {
  txt: React.PropTypes.String,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'This is the default text'
}

ReactDOM.render(
  <App cat={5} txt="This is another text" />,
  document.getElementById('app')
);
