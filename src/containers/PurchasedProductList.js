import React from 'react';
import { PropTypes } from 'prop-types';
import PurchasedProductListItem from '../components/PurchasedProductListItem';
import { connect } from 'react-redux';
import map from 'lodash/map';

const ProductList = (
	({ products }) => (
		<section className="row">
			{map(products, (product, index) => (
				<div key={index} className="col-xs-12 text-center mt-2 mb-2">
					<PurchasedProductListItem product={product} />
				</div>
			))}
		</section>
	)
);

ProductList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		preparation_time: PropTypes.number.isRequired,
	}).isRequired)
};

const mapStateToProps = state => ({
	products: state.purchasedProducts.map(item => state.products.data[item.id])
});

const mapDispatchToProps = () => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList);
