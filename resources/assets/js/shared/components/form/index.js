/**
 * External dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
	Formik,
	Form as FormikForm,
	setIn
} from 'formik';
import {
	Intent,
	Toast,
	Toaster
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import {
	has,
	reduce,
	head
} from 'lodash';

/**
 * Internal dependencies.
 */
import http from 'shared/lib/http';

class Form extends React.PureComponent {
	/**
	 * Handle the form submission.
	 *
	 * @param  {Object} values
	 * @param  {Object} formik
	 * @return {void}
	 */
	handleSubmit = async (values, formik) => {
		const { action, method } = this.props;

		formik.setSubmitting(true);

		try {
			const { data } = await http[method](action, values);

			if (has(data, 'redirect_url')) {
				window.location.href = data.redirect_url;
			}
		} catch (e) {
			if (this.isBackendError(e)) {
				this.transformBackendError(e, formik);
			} else {
				this.transformError(e, formik);
			}
		}

		formik.setSubmitting(false);
	}

	/**
	 * Check whether there is error returned by the backend.
	 *
	 * @param  {Object} error
	 * @return {Boolean}
	 */
	isBackendError(error) {
		return has(error, 'response');
	}

	/**
	 * Transform the backend errors to useful structure.
	 *
	 * @param  {Object} error
	 * @param  {Object} formik
	 * @return {void}
	 */
	transformBackendError(error, formik) {
		const { response } = error;

		if (response.status === 422) {
			formik.setErrors(
				reduce(response.data.errors, (carry, errors, path) => {
					return setIn(carry, path, head(errors));
				}, {})
			);
		} else {
			formik.setStatus({
				error: true,
				message: response.statusText
			});
		}
	}

	/**
	 * Transform the error.
	 *
	 * @param  {Object} error
	 * @param  {Object} formik
	 * @return {void}
	 */
	transformError(error, formik) {
		formik.setStatus({
			error: true,
			message: error.message
		});
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			action,
			method,
			children,
			onSubmit,
			...restProps
		} = this.props;

		return (
			<Formik {...restProps} onSubmit={onSubmit || this.handleSubmit}>
				{(context) => (
					<React.Fragment>
						<FormikForm>
							{children(context)}
						</FormikForm>

						<Toaster>
							{
								(context.status && context.status.error) && (
									<Toast
										icon={IconNames.WARNING_SIGN}
										intent={Intent.DANGER}
										message={`
											Заявката не може да се изпълни.
											Моля опитайте отново.
										`}
										onDismiss={() => context.setStatus(null)}
									>

									</Toast>
								)
							}
						</Toaster>
					</React.Fragment>
				)}
			</Formik>
		);
	}
}

/**
 * Interface.
 *
 * @type {Object}
 */
Form.propTypes = {
	action: PropTypes.string.isRequired,
	method: PropTypes.oneOf([
		'get',
		'post',
		'put',
		'patch',
		'delete'
	]).isRequired,
	children: PropTypes.func.isRequired,
	onSubmit: PropTypes.func
};

export default Form;
