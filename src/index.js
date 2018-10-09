import React from "react";
import ReactDOM from "react-dom";
import Hero from './HeroComponent/Hero.js';
function App(props){
	return(
		<Hero title="Simple React App" />
	);
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
