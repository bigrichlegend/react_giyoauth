
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/Home/Home';
import MyApp from './components/MyApp';
import HeaderComponent from 'app/components/Home/Header';

ReactDOM.render(
	<HeaderComponent />,
	document.getElementById('appheader')
);

let page ;

if(localStorage.getItem('idToken') !== null){	
	ReactDOM.render(
		<MyApp />,
		document.getElementById('app')
	);
}else{	
	ReactDOM.render(
		<HomePage />,
		document.getElementById('app')
	);
}
/*
ReactDOM.render(

	{page},
	document.getElementById('app')
);
*/
//<HomePage/>,