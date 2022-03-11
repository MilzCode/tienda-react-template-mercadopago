import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useScript from './hooks/useScript';
import ErrUrl from './views/404';
import Home from './views/Home';
import Item from './views/Item';

const App = () => {
	const defaultRoute = <Route path="/*" element={<ErrUrl />} />;

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/item/:id" element={<Item />} />
					{defaultRoute}
				</Routes>
			</Router>
		</>
	);
};

export default App;
