/**
 * External dependencies.
 */
import React from 'react';
import { Subscribe } from 'unstated';
import {
	Button,
	ButtonGroup,
	HTMLTable,
	Intent,
	Icon
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

/**
 * Internal dependencies.
 */
import DialogContainer from 'shared/state/dialog';
import ProductsContainer from 'stockroom/state/products';

class ProductsList extends React.Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return (
			<Subscribe to={[ProductsContainer, DialogContainer]}>
				{(products, dialog) => {
					return (
						<HTMLTable>
							<thead>
								<tr>
									<th style={{ width: '50%' }}>
										Продукт
									</th>

									<th style={{ width: '30%' }}>
										Разновидности
									</th>

									<th style={{ width: '20%' }}>
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

											<td>
												<ButtonGroup minimal>
													<Button
														icon={IconNames.EDIT}
														intent={Intent.WARNING}
														onClick={() => dialog.open('stockroom/dialogs/manage-product', { product })}
													/>

													<Button icon={IconNames.TRASH} intent={Intent.DANGER} />
												</ButtonGroup>
											</td>
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
