import React from 'react';
import { PropTypes } from 'prop-types';
import ProductListItem from '../components/ProductListItem';
import { connect } from 'react-redux';
import map from 'lodash/map';
import { buyProduct } from '../actions';

const ProductList = (
	({ products, onProductClick }) => (
		<section className="row">
			{
				products.loading ?
				'Loading products...' :
				map(products.data, product => (
					<div key={product.id} className="col-sm-6 col-md-4 col-lg-4 text-center divcard">
						<ProductListItem product={product}  onClick={onProductClick} />
					</div>
				))
			}
		</section>
	)
);

ProductList.propTypes = {
	products: PropTypes.shape({
		loading: PropTypes.bool.isRequired,
		data: PropTypes.object.isRequired
	}).isRequired,
	onProductClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	products: state.products,
});

const mapDispatchToProps = dispatch => ({
	onProductClick: (id,preparation_time) =>  dispatch(buyProduct(id,preparation_time))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList);
