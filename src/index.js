import React from "react";
import ReactDOM from "react-dom";
import hero from './HeroComponent/hero.js';
function App(props){
	return(
		<React.Fragment>
			<hero title="Simple React App" />
		</React.Fragment>
	);
}
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );

