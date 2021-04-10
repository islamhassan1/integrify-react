import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Cards />
				</Route>
				<Route path="/:id">
					<CardDetails />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
