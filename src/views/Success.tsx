import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Success = () => {
	return (
		<div className="FULLVIEWPORT CENTERFLEX">
			<Link to="/" className="LINK">
				Volver atras
			</Link>
			<h1>PAGO EXITOSO :D</h1>
		</div>
	);
};

export default Success;
