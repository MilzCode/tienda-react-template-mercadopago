import React from 'react';
import { Link } from 'react-router-dom';

interface props {
	src: string;
	title: string;
	price: number;
	id: number | string;
}
const Producto = ({ src, title, price, id = '' }: props) => {
	return (
		<div className="home__producto">
			<img src={src} alt={title} />
			<h3>{title}</h3>
			<p>$ {price}</p>
			<Link to={'/item/' + id}>
				<button>Comprar</button>
			</Link>
		</div>
	);
};

export default Producto;
