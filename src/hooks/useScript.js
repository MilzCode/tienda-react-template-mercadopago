import { useEffect } from 'react';

const useScript = (url = '', props = {}) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = url;
		script.async = true;
		Object.keys(props).forEach((key) => {
			script.setAttribute(key, props[key]);
		});
		document.body.appendChild(script);
		return () => {
			//esto es para limpiar el iframe que genera el script de mercado libre.
			let iframe = document.body.querySelector('iframe[src*="mercadolibre"]');
			if (iframe) {
				document.body.removeChild(iframe);
			}
			document.body.removeChild(script);
		};
	}, [url]);
};

export default useScript;
