/**
 * External dependencies.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { FocusStyleManager } from '@blueprintjs/core';
import { find, assign } from 'lodash';

/**
 * Internal dependencies.
 */
import './styles/global';
import './styles/document';
import Core from 'modules/core';
import Stockroom from 'modules/stockroom';

/**
 * Disable the focus on non-keyboard interactions.
 */
FocusStyleManager.onlyShowFocusOnTabs();

/**
 * Start the application.
 */
(async () => {
	const chunk = find(assign(
		{},
		Core,
		Stockroom
	), (chunk, key) => key === window.app.chunk);

	if (chunk) {
		const { default: Component } = await chunk();

		ReactDOM.render(
			<Component />,
			document.querySelector('.app')
		);
	} else {
		throw new Error(`Could not find the chunk - ${window.app.chunk}`);
	}
})();

