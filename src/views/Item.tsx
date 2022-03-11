import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/layout/Header';

const Item = () => {
	const { id } = useParams();
	return (
		<>
			<Header />
			<div>ITEM {id}</div>
		</>
	);
};

export default Item;
