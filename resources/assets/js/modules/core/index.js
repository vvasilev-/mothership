export default {
	'core/login': () => import(/* webpackChunkName: 'js/core/login' */ 'modules/core/login'),
	'core/dashboard': () => import(/* webpackChunkName: 'js/core/dashboard' */ 'modules/core/dashboard')
};
