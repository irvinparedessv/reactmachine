import React from 'react';
import { PropTypes } from 'prop-types';
const mystyle = {
	maxWidth: "7rem",
    maxHeight: "8rem",
	minHeight: "8rem"
   // CSS CODE
   };
const CompletedProductListItem = (
	({ product }) => (
		<div className="panel panel-default">
			<div className="panel-body">
				<img src={product.thumbnail} className="img-rounded img-responsive center-block" style={mystyle} />
			</div>
		</div>
	)
);

CompletedProductListItem.propTypes = {
	product: PropTypes.shape({
		thumbnail: PropTypes.string.isRequired
	}).isRequired
};

export default CompletedProductListItem;
