/**
 * External dependencies.
 */
import styled from 'react-emotion';
import { withProps } from 'recompose';
import { Card, Elevation } from '@blueprintjs/core';

export default withProps({
	elevation: Elevation.ONE
})(styled(Card)`
	width: 300px;
	padding: 15px;
`);
