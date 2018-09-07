/**
 * External dependencies.
 */
import React from 'react';
import { Field, getIn } from 'formik';

/**
 * Internal dependencies.
 */
import { Error } from 'components/form-error/style';

class FormError extends React.Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	*/
	render() {
		const { name } = this.props;

		return (
			<Field name={name}>
				{({ form }) => {
					const error = getIn(form.errors, name);
					const touch = getIn(form.touched, name);

					if (!error || !touch) {
						return null;
					}

					return (
						<Error>
							{error}
						</Error>
					);
				}}
			</Field>
		);
	}
}

export default FormError;
