import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import DataPhones from '../data/phones.json';
import useScript from '../hooks/useScript';

const Item = () => {
	const { id } = useParams();
	//@ts-ignore
	const phone: any = DataPhones[id];

	useScript('https://www.mercadopago.com/v2/security.js', {
		view: 'item',
	});
	if (id && !phone) {
		window.location.href = '/';
	}

	const handdlePagarMP = async (btn: any) => {
		//disable btn
		btn.target.disabled = true;
		// const PORT = 8080;
		// const APIURL = `http:///localhost:${PORT}/api/`;
		const APIURL = `https://checkout-mp-react.herokuapp.com/api/`;
		const current_domain = window.location.hostname;
		const getIdPreferences = async () => {
			try {
				const orderData = {
					quantity: phone.quantity,
					unit_price: phone.price,
					title: phone.title,
					idProd: 1234,
					description: 'Dispositivo móvil de Tienda e-commerce',
					picture_url: current_domain
						? 'https://' + current_domain + phone.srcPath
						: '',
					payer: {
						name: 'Lalo',
						surname: 'Landa',
						email: 'test_user_63274575@testuser.com',
						phone: {
							area_code: '11',
							number: 22223333,
						},
						address: {
							street_name: 'Falsa',
							street_number: 123,
							zip_code: '1111',
						},
					},
					external_reference: 'brsmilanez@hotmail.com',
				};
				const resp = await fetch(APIURL + 'mercadopago/create_preference', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(orderData),
				});
				const data = await resp.json();
				const { init_point } = data;
				if (!init_point) return null;
				window.location.href = init_point;
				return id;
			} catch (error) {
				console.log(error);
			}
		};
		getIdPreferences();
	};

	return (
		<>
			<Header />
			{phone && (
				<>
					<br />
					<div className="item">
						<Link to="/" className="LINK">
							Volver atras
						</Link>
						<h2>Carrito de Compra</h2>
						<div className="item__container">
							<div className="item__img">
								<img src={phone.srcPath} alt={phone.title} />
							</div>
							<div className="item__info">
								<div className="item__inf">
									Nombre: <span>{phone.title}</span>
								</div>
								<div className="item__inf">
									Precio: <span>$ {phone.price}</span>
								</div>
								<div className="item__inf">
									Descripción: <span>Producto de E-commerce</span>
								</div>
								<div className="item__inf">
									Disponible: <span>{phone.quantity}</span>
								</div>
							</div>

							<div className="item__pagar">
								<h3>Carrito</h3>
								<div className="item__sub-total">
									Subtotal: <span>$ {phone.price}</span>
								</div>
								<br />
								<button className="item__pagar-btn" onClick={handdlePagarMP}>
									Pagar la compra
								</button>
							</div>
						</div>
					</div>
				</>
			)}
			<Footer />
		</>
	);
};

export default Item;
