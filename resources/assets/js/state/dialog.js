/**
 * External dependencies.
 */
import React from 'react';
import { Container } from 'unstated';

class DialogContainer extends Container {
	/**
	 * State.
	 *
	 * @type {Object}
	 */
	state = {
		visible: false,
		view: null,
		props: {}
	};

	/**
	 * Open the specified dialog.
	 *
	 * @param  {Object} view
	 * @param  {Object} [props]
	 * @return {void}
	 */
	open(view, props = {}) {
		this.setState({
			visible: true,
			view,
			props
		});
	}

	/**
	 * Close the currently opened dialog.
	 *
	 * @return {void}
	 */
	close() {
		this.setState({
			visible: false
		});
	}

	/**
	 * Clear the currently opened dialog.
	 *
	 * @return {void}
	 */
	clear() {
		this.setState({
			view: null,
			props: {}
		});
	}
}

export default DialogContainer;
