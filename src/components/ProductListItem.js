import React  from 'react';
import { PropTypes } from 'prop-types';
const mystyle = {
	maxWidth: "7rem",
    maxHeight: "8rem",
	minHeight: "8rem",
	marginBottom: "5%"

   // CSS CODE
   };
const ProductListItem = (
	({ product, balance, onClick }) => (
		<div className="panel panel-default">
			<div className="panel-heading labelname">
				<strong>{product.name}</strong>
			</div>
			<div className="panel-body">
				<img src={product.thumbnail} className="img-rounded img-responsive center-block" style={mystyle} />
			</div>
			<div className="panel-heading">
				<strong>{product.preparation_time} seg.</strong>
			</div>
			<div className="panel-footer">
				{
					
					product.loading ?
					<button className="btn btn-primary">Ordenando ...</button> :
					
					<button className="btn btn-primary" onClick={() => onClick(product.id,product.preparation_time)}>Ordenar</button> 
				}
			</div>
		</div>
	)
);

ProductListItem.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		preparation_time: PropTypes.number.isRequired,
		thumbnail: PropTypes.string.isRequired
	}).isRequired,
	onClick: PropTypes.func.isRequired
};

export default ProductListItem;
