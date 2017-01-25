
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/Home/Home';
import HeaderComponent from 'app/components/Home//Header';

ReactDOM.render(
	<HeaderComponent />,
	document.getElementById('appheader')
);

ReactDOM.render(
	<HomePage/>,
	document.getElementById('app')
);