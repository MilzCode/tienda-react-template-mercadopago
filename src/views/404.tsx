import React from 'react';
import { Link } from 'react-router-dom';

const ErrUrl = () => {
	return (
		<div className="FULLVIEWPORT CENTERFLEX">
			<Link to="/" className="LINK">
				Volver atras
			</Link>
			<h1>404</h1>
		</div>
	);
};

export default ErrUrl;
