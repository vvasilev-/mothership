/**
 * External dependencies.
 */
import * as yup from 'yup';

export default yup.object({
	title: yup.string().required('Моля въведете име на продукта.'),
	variations: yup.array()
	.of(
		yup.object().shape({
			title: yup.string().required('Моля въведете име на разновидността.')
		})
	)
});
