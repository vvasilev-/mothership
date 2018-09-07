/**
 * External dependencies.
 */
import React from 'react';
import { Subscribe } from 'unstated';
import { IconNames } from '@blueprintjs/icons';
import {
	Button,
	Popover,
	Menu,
	MenuItem,
	MenuDivider
} from '@blueprintjs/core';

/**
 * Internal dependencies.
 */
import DialogContainer from 'state/dialog';

class MenuAdd extends React.PureComponent {
	/**
	 * Render the menu.
	 *
	 * @return {Object}
	 */
	renderMenu() {
		return (
			<Menu>
				<MenuDivider title="Склад" />

				<Subscribe to={[DialogContainer]}>
					{(dialog) => {
						return (
							<MenuItem text="Нов продукт" onClick={() => dialog.open('dialogs/stockroom/manage-product')} />
						);
					}}
				</Subscribe>
			</Menu>
		);
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return (
			<Popover content={this.renderMenu()}>
				<Button
					icon={IconNames.PLUS}
					rightIcon={IconNames.CARET_DOWN}
					minimal
				/>
			</Popover>
		);
	}
}

export default MenuAdd;
