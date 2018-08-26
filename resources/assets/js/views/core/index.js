export default {
	'core/login': () => import(/* webpackChunkName: 'js/core/login' */ 'views/core/login'),
	'core/dashboard': () => import(/* webpackChunkName: 'js/core/dashboard' */ 'views/core/dashboard')
};
