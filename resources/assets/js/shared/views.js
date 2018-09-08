/**
 * External dependencies.
 */
import React from 'react';
import { find, assign } from 'lodash';

/**
 * Internal dependencies.
 */
import Core from 'core/views';
import Stockroom from 'stockroom/views';

/**
 * Register all views into one dictionary.
 *
 * @type {Object}
 */
const views = assign(
	{},
	Core,
	Stockroom
);

class ViewsController extends React.Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const View = find(views, (value, key) => key === window.app.chunk);

		return <View />;
	}
}

export default ViewsController;
