/**
 * External dependencies.
 */
import React from 'react';
import {
	Navbar,
	AnchorButton,
	Alignment,
	Classes
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { startsWith } from 'lodash';

/**
 * Internal dependencies.
 */
import withRouter from 'common/with-router';
import ButtonLogout from 'layout/nav/button-logout';

class Nav extends React.Component {
	/**
	 * Check if the route is the current one.
	 *
	 * @param  {String} prefix
	 * @return {Boolean}
	 */
	isCurrent(prefix) {
		return startsWith(prefix, this.props.route().current());
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { route } = this.props;

		return (
			<Navbar className={Classes.DARK}>
				<Navbar.Group align={Alignment.LEFT}>
					<AnchorButton
						href={route('core.dashboard')}
						icon={IconNames.DASHBOARD}
						active={this.isCurrent('core.dashboard')}
						minimal
					>
						Табло
					</AnchorButton>
				</Navbar.Group>

				<Navbar.Group align={Alignment.RIGHT}>
					<Navbar.Divider />

					<ButtonLogout />
				</Navbar.Group>
			</Navbar>
		);
	}
}

/**
 * Interface.
 *
 * @type {Object}
 */
Nav.propTypes = {
	route: PropTypes.func.isRequired
};

export default withRouter(Nav);
