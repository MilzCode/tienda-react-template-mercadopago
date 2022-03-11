import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Pending = () => {
	return (
		<div className="FULLVIEWPORT CENTERFLEX">
			<Link to="/" className="LINK">
				Volver atras
			</Link>
			<h1>PAGO PENDIENTE :/</h1>
		</div>
	);
};

export default Pending;
