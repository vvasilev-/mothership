/**
 * External dependencies.
 */
import Loadable from 'react-loadable';

/**
 * Internal dependencies.
 */
import Null from 'components/null';

export default Loadable({
	loading: Null,
	loader() {
		return import(
			/* webpackChunkName: 'js/views/stockroom/dashboard' */
			'views/stockroom/dashboard/main'
		);
	}
});
