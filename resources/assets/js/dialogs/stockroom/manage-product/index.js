/**
 * External dependencies.
 */
import React from 'react';
import Loadable from 'react-loadable';
import { Spinner } from '@blueprintjs/core';

export default Loadable({
	loading: () => null,
	loader() {
		return import(
			/* webpackChunkName: 'js/dialogs/stockroom/manage-product' */
			'dialogs/stockroom/manage-product/main'
		);
	}
});
