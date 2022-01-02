import React from 'react';
import { PropTypes } from 'prop-types';
const mystyle = {
	maxWidth: "7rem",
    maxHeight: "8rem"
   // CSS CODE
   };
const PurchasedProductListItem = (
	({ product }) => (
		<div className="panel panel-default">
			<div className="panel-body">
				<img src={product.thumbnail} className="img-rounded img-responsive center-block" style={mystyle} />
				<br></br>
				<label>En Proceso....</label>
			</div>
		</div>
	)
);

PurchasedProductListItem.propTypes = {
	product:  PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		preparation_time: PropTypes.number.isRequired,
		thumbnail: PropTypes.string.isRequired
	}).isRequired,
};

export default PurchasedProductListItem;
