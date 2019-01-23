import React, { Component } from 'react';
import Users from './components/Users/index';
import Form from './components/Form/index';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Test from './components/Test/index';
import Languages from './components/Languages/index';
import General from './components/General/index';
import Acquaintance from './components/Acquaintance/index';

import './scss/index.scss';

export default class App extends Component {

	render() {
		return (
			<div className="App">
				<Header />
				<Test />
				<Acquaintance />
				<Languages />
				<General />
				<Users />
				<Form />
				<Footer />
			</div>
		);
	}
}

