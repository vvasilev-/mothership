/**
 * External dependencies.
 */
import Loadable from 'react-loadable';

/**
 * Internal dependencies.
 */
import Null from 'shared/components/null';

export default Loadable({
	loading: Null,
	loader() {
		return import(
			/* webpackChunkName: 'js/core/views/login' */
			'core/views/login/main'
		);
	}
});
