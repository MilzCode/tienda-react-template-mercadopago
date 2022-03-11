import React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Producto from '../components/views/Home/Producto';
import useScript from '../hooks/useScript';
import DATAPHONES from '../data/phones.json';

const Home = () => {
	useScript('https://www.mercadopago.com/v2/security.js', {
		view: 'home',
	});
	return (
		<>
			<Header />

			<div className="home">
				<div className="home__filtros">
					<br />
					<br />
					<h2>Marcas</h2>
					<ul>
						<li>Apple</li>
						<li>Samsung</li>
						<li>Xiaomi</li>
						<li>Huawei</li>
						<li>Motorola</li>
						<li>Sony</li>
						<li>LG</li>
					</ul>
					<h2>Precio</h2>
					<ul>
						<li>$0 - $100</li>
						<li>$100 - $200</li>
						<li>$200 - $300</li>
						<li>$300 - $400</li>
					</ul>
				</div>
				<div className="home__productos">
					{Object.entries(DATAPHONES).map(([key, value]) => (
						<Producto
							key={key}
							src={value.srcPath}
							title={value.title}
							price={value.price}
							id={key}
						/>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
