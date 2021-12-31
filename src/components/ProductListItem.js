import React  from 'react';
import { PropTypes } from 'prop-types';
const mystyle = {
	maxWidth: "10rem",
    maxHeight: "10rem"
   // CSS CODE
   };
const ProductListItem = (
	({ product, balance, onClick }) => (
		<div className="panel panel-default">
			<div className="panel-heading">
				Name: <strong>{product.name}</strong>
			</div>
			<div className="panel-body">
				<img src={product.thumbnail} className="img-rounded img-responsive center-block" style={mystyle} />
			</div>
			<div className="panel-footer">
				{
					
					product.loading ?
					<button className="btn btn-primary">Ordenando ...</button> :
					
					<button className="btn btn-primary" onClick={() => onClick(product.id)}>Ordenar</button> 
				}
			</div>
		</div>
	)
);

ProductListItem.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.number.isRequired,
		thumbnail: PropTypes.string.isRequired
	}).isRequired,
	balance: PropTypes.shape({
		loading: PropTypes.bool.isRequired,
		value: PropTypes.number.isRequired
	}),
	onClick: PropTypes.func.isRequired
};

export default ProductListItem;
