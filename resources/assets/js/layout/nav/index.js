/**
 * External dependencies.
 */
import React from 'react';
import {
	Navbar,
	Button,
	AnchorButton,
	Alignment,
	Classes
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { startsWith } from 'lodash';

class Nav extends React.Component {
	/**
	 * Check if the route is the current one.
	 *
	 * @param  {String} prefix
	 * @return {Boolean}
	 */
	isCurrent(prefix) {
		return startsWith(prefix, window.route().current());
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return (
			<Navbar className={Classes.DARK}>
				<Navbar.Group align={Alignment.LEFT}>
					<AnchorButton
						href={window.route('core.dashboard')}
						icon={IconNames.DASHBOARD}
						active={this.isCurrent('core.dashboard')}
						minimal
					>
						Табло
					</AnchorButton>
				</Navbar.Group>

				<Navbar.Group align={Alignment.RIGHT}>
					<Navbar.Divider />

					<Button minimal icon={IconNames.LOG_OUT} />
				</Navbar.Group>
			</Navbar>
		);
	}
}

export default Nav;
