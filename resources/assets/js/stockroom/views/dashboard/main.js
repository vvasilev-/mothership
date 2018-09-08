/**
 * External dependencies.
 */
import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';

/**
 * Internal dependencies.
 */
import Layout from 'shared/layout';
import Container from 'shared/components/container';
import PageTitle from 'shared/components/page-title';
import ProductsList from 'stockroom/views/dashboard/products-list';

class Dashboard extends React.Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return (
			<Layout>
				<Container>
					<PageTitle>
						Продукти
					</PageTitle>

					<Card elevation={Elevation.ONE}>
						<ProductsList />
					</Card>
				</Container>
			</Layout>
		);
	}
}

export default Dashboard;
