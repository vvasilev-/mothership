/**
 * External dependencies.
 */
import React from 'react';
import { Container } from 'unstated';
import { get } from 'lodash';

class ProductsContainer extends Container {
	/**
	 * State.
	 *
	 * @type {Object}
	 */
	state = {
		items: get(window.app, 'stockroom.products.data', []),
		paging: {
			links: get(window.app, 'stockroom.products.links', {}),
			meta: get(window.app, 'stockroom.products.meta', {})
		}
	};
}

export default ProductsContainer;
