import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useScript from './hooks/useScript';
import ErrUrl from './views/404';
import Failure from './views/Failure';
import Home from './views/Home';
import Item from './views/Item';
import Pending from './views/Pending';
import Success from './views/Success';

const App = () => {
	const defaultRoute = <Route path="/*" element={<ErrUrl />} />;

	return (
		<>
			<Router>
				<Routes>
					<Route path="/item/:id" element={<Item />} />
					<Route path="/failure" element={<Failure />} />
					<Route path="/pending" element={<Pending />} />
					<Route path="/success" element={<Success />} />

					<Route path="/" element={<Home />} />
					{defaultRoute}
				</Routes>
			</Router>
		</>
	);
};

export default App;
