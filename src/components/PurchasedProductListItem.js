import React from 'react';
import { PropTypes } from 'prop-types';
const mystyle = {
	maxWidth: "10rem",
    maxHeight: "10rem"
   // CSS CODE
   };
const PurchasedProductListItem = (
	({ product }) => (
		<div className="panel panel-default">
			<div className="panel-body">
				<img src={product.thumbnail} className="img-rounded img-responsive center-block" style={mystyle} />
				<br></br>
				<label>Tiempo 2 seg</label>
			</div>
		</div>
	)
);

PurchasedProductListItem.propTypes = {
	product: PropTypes.shape({
		thumbnail: PropTypes.string.isRequired
	}).isRequired
};

export default PurchasedProductListItem;
