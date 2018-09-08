/**
 * External dependencies.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';
import { FocusStyleManager } from '@blueprintjs/core';

/**
 * Internal dependencies.
 */
import './styles/global';
import './styles/document';
import ViewsController from 'views/controller';
import DialogsController from 'dialogs/controller';

/**
 * Disable the focus on non-keyboard interactions.
 */
FocusStyleManager.onlyShowFocusOnTabs();

/**
 * Start the application.
 */
ReactDOM.render(
	<Provider>
		<ViewsController />
		<DialogsController />
	</Provider>,
	document.querySelector('.app')
);
