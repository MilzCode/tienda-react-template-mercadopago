import React from 'react';
import { Link } from 'react-router-dom';

const Failure = () => {
	const url = new URL(window.location.href);
	const querys = url.searchParams;
	const payment_id = querys.get('payment_id');
	const payment_type = querys.get('payment_type');
	const external_reference = querys.get('external_reference');
	return (
		<div className="FULLVIEWPORT CENTERFLEX">
			<Link to="/" className="LINK">
				Volver atras
			</Link>
			<h1>NO SE PUDO REALIZAR EL COBRO D:</h1>
			<br />
			<br />
			{payment_id && <h3>{payment_id}</h3>}
			{payment_type && <h3>{payment_type}</h3>}
			{external_reference && <h3>{external_reference}</h3>}
		</div>
	);
};

export default Failure;
