/**
 * External dependencies.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';
import { FocusStyleManager } from '@blueprintjs/core';
import { find, assign } from 'lodash';

/**
 * Internal dependencies.
 */
import './styles/global';
import './styles/document';
import DialogManager from 'dialogs/manager';
import Core from 'views/core';
import Stockroom from 'views/stockroom';

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
			<Provider>
				<Component />
				<DialogManager />
			</Provider>,
			document.querySelector('.app')
		);
	} else {
		throw new Error(`Could not find the chunk - ${window.app.chunk}`);
	}
})();
