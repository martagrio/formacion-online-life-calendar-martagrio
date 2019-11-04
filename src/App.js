import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			days: []
		}
  }

  render() {
    return (
      <div className="app">
				this will be the best mood calendar in the whole wooooorld
      </div>
    );
  }
}

export default App;
