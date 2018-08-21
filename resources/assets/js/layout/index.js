/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import Nav from 'layout/nav';

class Layout extends React.Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { children } = this.props;

		return (
			<React.Fragment>
				<Nav />

				{children}
			</React.Fragment>
		);
	}
}

export default Layout;
