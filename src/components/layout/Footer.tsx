import React from 'react';

const Footer = () => {
	return (
		<>
			<br />
			<div className="footer">
				<div className="footer__izquierda">
					<h2>Sobre Nosotros</h2>
					<p>Este es un test solo para el examen de pago de mercado pago.</p>
				</div>
				<div className="footer__derecha">
					<h2>Contacto</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quidem.
					</p>

					<div className="footer__derecha__redes">
						<a href="https://www.facebook.com/">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="https://www.instagram.com/">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https://www.twitter.com/">
							<i className="fab fa-twitter"></i>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
