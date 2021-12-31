import React from 'react';
import { PropTypes } from 'prop-types';
import CompletedProductListItem from '../components/CompletedProductListItem';
import { connect } from 'react-redux';
import map from 'lodash/map';

const ProductList = (
	({ products }) => (
		<section className="row">
			{map(products, (product, index) => (
				<div key={index} className="col-xs-12 text-center">
					<CompletedProductListItem product={product} />
				</div>
			))}
		</section>
	)
);

ProductList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired
	}).isRequired)
};

const mapStateToProps = state => ({
	products: state.completedProducts.map(id => state.products.data[id])
});

const mapDispatchToProps = () => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList);
