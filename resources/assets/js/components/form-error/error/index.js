/**
 * External dependencies.
 */
import styled from 'react-emotion';
import { withProps } from 'recompose';
import { Classes, Colors } from '@blueprintjs/core';

export default withProps({
	className: Classes.FORM_HELPER_TEXT
})(styled('p')`
	margin-bottom: 0;
	color: ${Colors.RED2};

	.${Classes.FORM_GROUP} & {
		color: ${Colors.RED2};
	}
`);
