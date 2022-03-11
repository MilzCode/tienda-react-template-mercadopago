import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Failure = () => {
	return (
		<div className="FULLVIEWPORT CENTERFLEX">
			<Link to="/" className="LINK">
				Volver atras
			</Link>
			<h1>NO SE PUDO REALIZAR EL COBRO D:</h1>
		</div>
	);
};

export default Failure;
