/**
 * External dependencies.
 */
import React from 'react';
import { Button } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

/**
 * Internal dependencies.
 */
import Form from 'components/form';

class ButtonLogout extends React.PureComponent {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return (
			<Form action={window.route('core.logout').url()} method="post">
				{() => (
					<Button
						type="submit"
						icon={IconNames.LOG_OUT}
						minimal
					/>
				)}
			</Form>
		);
	}
}

export default ButtonLogout;


