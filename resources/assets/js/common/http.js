/**
 * External dependencies.
 */
import axios from 'axios';

/**
 * Create the instance of Axios.
 */
const http = axios.create({
	headers: {
		'X-Requested-With': 'XMLHttpRequest',
		'X-CSRF-TOKEN': document.querySelector('meta[name="csrf"]').content
	}
});

export default http;
