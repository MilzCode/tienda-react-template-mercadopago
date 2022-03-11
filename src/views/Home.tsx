import React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Producto from '../components/views/Home/Producto';
import useScript from '../hooks/useScript';

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
					<Producto
						src="/static/img/phones/iphone8.png"
						title="iPhone 8 Pro"
						price={150}
						id={1}
					/>
					<Producto
						src="/static/img/phones/lgg6.jpg"
						title="Lg G6"
						price={100}
						id={2}
					/>
					<Producto
						src="/static/img/phones/motog4.jpg"
						title="Moto G4"
						price={80}
						id={3}
					/>
					<Producto
						src="/static/img/phones/xperia.jpg"
						title="Sony Xperia X100"
						price={180}
						id={4}
					/>
					<Producto
						src="/static/img/phones/motog5.jpg"
						title="Moto G5"
						price={90}
						id={5}
					/>
					<Producto
						src="/static/img/phones/galaxys9.jpg"
						title="Galaxy S9"
						price={126}
						id={6}
					/>
					<Producto
						src="/static/img/phones/p30.jpg"
						title="Huawei p30 lite"
						price={111}
						id={7}
					/>
					<Producto
						src="/static/img/phones/j5.png"
						title="Galaxy j5"
						price={50}
						id={8}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
