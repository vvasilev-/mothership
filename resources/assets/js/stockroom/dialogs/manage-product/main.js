/**
 * External dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
	Dialog,
	Button,
	InputGroup,
	FormGroup,
	Intent,
	Classes
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { FieldArray } from 'formik';
import { get } from 'lodash';

/**
 * Internal dependencies.
 */
import withRouter from 'shared/lib/with-router';
import Form from 'shared/components/form';
import FormError from 'shared/components/form-error';
import { Variation } from 'stockroom/dialogs/manage-product/style';
import schema from 'stockroom/dialogs/manage-product/schema';

class ManageProductDialog extends React.Component {
	/**
	 * Interface.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		route: PropTypes.func.isRequired,
		dialog: PropTypes.shape({
			close: PropTypes.func
		}).isRequired
	};

	/**
	 * Determine if the dialog is used for editing of a product.
	 *
	 * @return {Boolean}
	 */
	get isEdit() {
		return !!this.props.product;
	}

	/**
	 * Get the title of the dialog.
	 *
	 * @return {String}
	 */
	get title() {
		return this.isEdit
			? 'Редактиране на продукт'
			: 'Добавяне на продукт';
	}

	/**
	 * Get the HTTP method used by the form.
	 *
	 * @return {String}
	 */
	get method() {
		return this.isEdit ? 'put' : 'post';
	}

	/**
	 * Get the URL used by the form.
	 *
	 * @return {String}
	 */
	get action() {
		const { route } = this.props;

		return this.isEdit
			? route('stockroom.products.update', { product: this.props.product.id }).url()
			: route('stockroom.products.create').url();
	}

	/**
	 * Get the inital values of the form.
	 *
	 * @return {Object}
	 */
	get initialValues() {
		const { product } = this.props;

		return {
			title: get(product, 'title', ''),
			variations: get(product, 'variations', [{ title: '' }])
		};
	}

	/**
	 * Handle the click on the "Cancel" button.
	 *
	 * @return {void}
	 */
	handleCancelClick = () => {
		this.props.dialog.close();
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return (
			<Dialog title={this.title} {...this.props}>
				<Form
					method={this.method}
					action={this.action}
					initialValues={this.initialValues}
					validationSchema={schema}
				>
					{({
						values,
						errors,
						isSubmitting,
						handleChange,
						handleBlur
					}) => (
						<React.Fragment>
							<div className={Classes.DIALOG_BODY}>
								<FormGroup label="Име">
									<InputGroup
										name="title"
										autoComplete="off"
										value={values.title}
										onChange={handleChange}
										onBlur={handleBlur}
									/>

									<FormError name="title" />
								</FormGroup>

								<FieldArray name="variations">
									{({ push, remove }) => {
										return (
											<React.Fragment>
												<FormGroup label="Разновидности">
													{values.variations.map((variation, index) => (
														<React.Fragment key={index}>
															<Variation
																autoComplete="off"
																name={`variations.${index}.title`}
																value={variation.title}
																rightElement={(
																	index > 0
																	? (
																		<Button
																			small
																			minimal
																			icon={IconNames.TRASH}
																			intent={Intent.DANGER}
																			onClick={() => remove(index)}
																		/>
																	)
																	: null
																)}
																onChange={handleChange}
																onBlur={handleBlur}
															/>

															<FormError name={`variations.${index}.title`} />
														</React.Fragment>
													))}
												</FormGroup>

												<Button
													small
													icon={IconNames.PLUS}
													onClick={() => push({ title: '' })}
												>
													Добави
												</Button>
											</React.Fragment>
										);
									}}
								</FieldArray>
							</div>

							<div className={Classes.DIALOG_FOOTER}>
								<div className={Classes.DIALOG_FOOTER_ACTIONS}>
									{!isSubmitting && (
										<Button onClick={this.handleCancelClick}>
											Откажи
										</Button>
									)}

									<Button
										type="submit"
										intent={Intent.PRIMARY}
										loading={isSubmitting}
									>
										Запази
									</Button>
								</div>
							</div>
						</React.Fragment>
					)}
				</Form>
			</Dialog>
		);
	}
}

export default withRouter(ManageProductDialog);
