/**
 * External dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { IconNames } from '@blueprintjs/icons';
import {
	Button,
	Icon,
	Intent,
	InputGroup,
	FormGroup
} from '@blueprintjs/core';

/**
 * Internal dependencies.
 */
import withRouter from 'common/with-router';
import Form from 'components/form';
import FormError from 'components/form-error';
import {
	View,
	Card,
	Actions
} from 'views/core/login/style';
import schema from 'views/core/login/schema';

class Login extends React.Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return (
			<View>
				<Card>
					<Form
						action={route('core.login')}
						method="post"
						validationSchema={schema}
						initialValues={{
							username: '',
							password: ''
						}}
					>
						{({
							isSubmitting,
							handleChange,
							handleBlur
						}) => (
							<React.Fragment>
								<FormGroup label="Потребителско име">
									<InputGroup
										name="username"
										autoComplete="off"
										leftIcon={<Icon icon={IconNames.USER} />}
										onChange={handleChange}
										onBlur={handleBlur}
									/>

									<FormError name="username" />
								</FormGroup>

								<FormGroup label="Парола">
									<InputGroup
										type="password"
										name="password"
										leftIcon={<Icon icon={IconNames.LOCK} />}
										onChange={handleChange}
										onBlur={handleBlur}
									/>

									<FormError name="password" />
								</FormGroup>

								<Actions>
									<Button
										type="submit"
										intent={Intent.PRIMARY}
										loading={isSubmitting}
									>
										Вход
									</Button>
								</Actions>
							</React.Fragment>
						)}
					</Form>
				</Card>
			</View>
		);
	}
}

/**
 * Interface.
 *
 * @type {Object}
 */
Login.propTypes = {
	route: PropTypes.func.isRequired
};

export default withRouter(Login);
