/**
 * External dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

/**
 * Internal dependencies.
 */
import withRouter from 'shared/lib/with-router';
import Form from 'shared/components/form';

class ButtonLogout extends React.PureComponent {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { route } = this.props;

		return (
			<Form action={route('core.logout').url()} method="post">
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

/**
 * Interface.
 *
 * @type {Object}
 */
ButtonLogout.propTypes = {
	route: PropTypes.func.isRequired
};

export default withRouter(ButtonLogout);
