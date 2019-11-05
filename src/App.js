import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			days: [],
			mood: ""
		}
		this.chooseMood = this.chooseMood.bind(this);
  }

chooseMood (e) {
	const currentMood = e.currentTarget.value;
	this.setState({
		mood: currentMood
	});

}
  render() {
    return (
      <div className="app">
				<header className="app__header">
					<h1 className="header__title">Life Calendar</h1>
				</header>
				<main className="app__main">
					<div className="edit__box">
						<label htmlFor="date">choose your date:</label>
						<input type="date" name="date" id="date" min="2019-01-01" max="2019-12-31"/>
						<p className="text__mood">mood:</p>
							<label htmlFor="happy"> :)
								<input type="radio" name="mood" id="happy" value=":)" onChange={this.chooseMood} />
							</label>
							<label htmlFor="sad"> :(
							 <input type="radio" name="mood" id="sad" value=":(" onChange={this.chooseMood} />
						 </label>
						 <label htmlFor="message">Message</label>
						 <input type="text" 
						 	className= {"text__message" + this.state.mood === ":)" ? "show" : ""}
						 	name="message" 
							id="message" 
							placeholder="Why is it a good day?"/>
					</div>
					<div className="calendar__box">
						<div className="day__box">
						</div>
					</div>
				</main>
				<footer className="app__footer">
					<p className="footer__copy">© Copyright Life Calendar by Marta García</p>
				</footer>
      </div>
    );
  }
}

export default App;
