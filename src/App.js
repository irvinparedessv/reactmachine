import React from 'react';
import ProductList from './containers/ProductList';
import CompletedProductList from './containers/CompletedProductList';
import Sidebar from './containers/Sidebar';
import Container from 'react-bootstrap/Container';
import './index.css';
const App = (
	() => (
		<div className="row">
			<div className="col-md-4">
			<h1 className="text-primary text-center mb-2">PRODUCTOS</h1>
				<ProductList />
			</div>
			<div className="col-md-4">
			<h1 className="text-warning text-center mb-2">PRODUCTOS EN PROCESO</h1>
				<Sidebar />
			</div>
			<div className="col-md-4">
				<h1 className="text-success text-center mb-2">PRODUCTOS TERMINADOS</h1>
				<CompletedProductList />
			</div>
		</div>
	)
);

export default App;
