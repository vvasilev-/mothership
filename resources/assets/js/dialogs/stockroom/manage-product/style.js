/**
 * External dependencies.
 */
import styled from 'react-emotion';
import { InputGroup } from '@blueprintjs/core';

export const Variation = styled(InputGroup)`
	& ~ & {
		margin-top: 5px;
	}
`;
