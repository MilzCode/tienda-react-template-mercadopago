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
			document.body.removeChild(script);
		};
	}, [url]);
};

export default useScript;
