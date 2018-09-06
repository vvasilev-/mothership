/**
 * External dependencies.
 */
import React from 'react';
import { Subscribe } from 'unstated';

/**
 * Internal dependencies.
 */
import DialogContainer from 'state/dialog';

class Manager extends React.Component {
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

					return (
						null
					);
				}}
			</Subscribe>
		);
	}
}

export default Manager;
