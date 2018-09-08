/**
 * External dependencies.
 */
import React from 'react';
import { Subscribe } from 'unstated';
import { HTMLTable } from '@blueprintjs/core';

/**
 * Internal dependencies.
 */
import ProductsContainer from 'stockroom/state/products';

class ProductsList extends React.Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return (
			<Subscribe to={[ProductsContainer]}>
				{(products) => {
					return (
						<HTMLTable>
							<thead>
								<tr>
									<th>
										Продукт
									</th>

									<th>
										Разновидности
									</th>

									<th>
										Действия
									</th>
								</tr>
							</thead>

							<tbody>
								{products.state.items.map((product) => {
									return (
										<tr key={product.id}>
											<td>
												{product.title}
											</td>

											<td>
												{product.variations.length}
											</td>

											<td>TODO</td>
										</tr>
									);
								})}
							</tbody>
						</HTMLTable>
					);
				}}
			</Subscribe>
		);
	}
}

export default ProductsList;
