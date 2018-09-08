/**
 * External dependencies.
 */
import styled from 'react-emotion';
import { withProps } from 'recompose';
import { Card as CardBase, Elevation } from '@blueprintjs/core';

export const View = styled('div')`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const Card = withProps({
	elevation: Elevation.ONE
})(styled(CardBase)`
	width: 300px;
	padding: 15px;
`);

export const Actions = styled('div')`
	text-align: center;
`;
