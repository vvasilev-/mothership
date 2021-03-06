/**
 * External dependencies.
 */
import React from 'react';
import { Subscribe } from 'unstated';
import { find, assign } from 'lodash';

/**
 * Internal dependencies.
 */
import DialogContainer from 'shared/state/dialog';
import Stockroom from 'stockroom/dialogs';

/**
 * Register all dialogs into one dictionary.
 *
 * @type {Object}
 */
const dialogs = assign(
	{},
	Stockroom
);

class DialogsController extends React.Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return (
			<Subscribe to={[DialogContainer]}>
				{(dialog) => {
					if (!dialog.state.view) {
						return null;
					}

					const Dialog = find(dialogs, (chunk, key) => key === dialog.state.view);

					return (
						<Dialog
							dialog={dialog}
							isOpen={dialog.state.visible}
							canEscapeKeyClose={false}
							canOutsideClickClose={false}
							isCloseButtonShown={false}
							{...dialog.state.props}
							onClosed={() => dialog.clear()}
						/>
					);
				}}
			</Subscribe>
		);
	}
}

export default DialogsController;
