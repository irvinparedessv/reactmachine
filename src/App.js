import React from 'react';
import ProductList from './containers/ProductList';
import CompletedProductList from './containers/CompletedProductList';
import Sidebar from './containers/Sidebar';
import Container from 'react-bootstrap/Container';
const App = (
	() => (
		<div className="row">
			<div className="col-md-4">
			<h1>PRODUCTOS</h1>
				<ProductList />
			</div>
			<div className="col-md-4">
			<h1>PRODUCTOS EN PROCESO</h1>
				<Sidebar />
			</div>
			<div className="col-md-4">
				<h1>PRODUCTOS TERMINADOS</h1>
				<CompletedProductList />
			</div>
		</div>
	)
);

export default App;
