/**
 * External dependencies.
 */
import { injectGlobal } from 'emotion';

export default injectGlobal`
	html,
	body {
		height: 100%;
	}

	body {
		background-color: #f0f0f7;
	}

	.app {
		min-height: 100%;
	}
`;
