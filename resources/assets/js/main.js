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
import DialogManager from 'dialogs/manager';
import ViewsController from 'views/controller';

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
		<DialogManager />
	</Provider>,
	document.querySelector('.app')
);
