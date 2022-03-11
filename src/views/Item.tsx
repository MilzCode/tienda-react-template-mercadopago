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
		const PUBLIC_KEY = 'TEST-efcbcded-34c5-494c-9a53-fbaa41af4f41';
		let mercadopago: any = null;
		try {
			//@ts-ignore
			mercadopago = await new MercadoPago(PUBLIC_KEY, {
				locale: 'es-CL',
			});
		} catch (error) {}
		if (mercadopago) {
			const getIdPreferences = async () => {
				try {
					const orderData = {
						quantity: phone.quantity,
						unit_price: phone.price,
						title: phone.title,
						idProd: 1234,
						desc: 'Dispositivo móvil de Tienda e-commerce',
						// img: img.src,
						payer: {
							name: 'Lalo',
							surname: 'Landa',
							email: 'test_user_63274575@testuser.com', ////EMAIL EXAMEN NOT FOUND
							// email: 'test_user_51992233@testuser.com',
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
					};
					const resp = await fetch(APIURL + 'mercadopago/create_preference', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(orderData),
					});
					const data = await resp.json();
					const { id } = data;
					if (!id) return null;
					await mercadopago.checkout({
						preference: {
							id,
						},
						theme: {
							// elementsColor: '#8e44ad',
						},
						autoOpen: true,
					});

					//esto es para limpiar el iframe que genera el script de mercado libre.
					let iframe = document.body.querySelector(
						'iframe[src*="mercadolibre"]'
					);
					if (iframe) {
						document.body.removeChild(iframe);
					}
					setTimeout(() => {
						btn.target.disabled = false;
					}, 5000);
					return id;
				} catch (error) {
					console.log(error);
				}
			};
			getIdPreferences();
		}
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
