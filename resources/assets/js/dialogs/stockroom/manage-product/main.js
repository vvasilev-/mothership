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

/**
 * Internal dependencies.
 */
import withRouter from 'common/with-router';
import schema from 'dialogs/stockroom/manage-product/schema';
import Form from 'components/form';
import FormError from 'components/form-error';
import { Variation } from 'dialogs/stockroom/manage-product/style';

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
			<Dialog title="Добавяне на продукт" {...this.props}>
				<Form
					method="post"
					action={this.props.route('stockroom.products.create').url()}
					validationSchema={schema}
					initialValues={{
						title: '',
						variations: [{ title: '' }]
					}}
				>
					{({
						values: { variations },
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
													{variations.map((variation, index) => (
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
