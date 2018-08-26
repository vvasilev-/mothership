/**
 * External dependencies.
 */
import * as yup from 'yup';

export default yup.object({
	username: yup.string().required('Полето е задължително.'),
	password: yup.string().required('Полето е задължително.')
});
