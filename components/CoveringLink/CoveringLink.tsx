import { FC } from 'react';

import { LinkContainer } from 'Components/LinkContainer';
import { Overlay } from 'Components/Overlay';

import { LinkContainer as LinkContainerType } from 'Types/links';
import { ElementWithCustomZIndex, ElementWithInlineStyle } from 'Types/styled-components';

type Props = LinkContainerType & ElementWithInlineStyle & ElementWithCustomZIndex;

export const CoveringLink: FC<Props> = ({ href, zIndex }) => (
  <LinkContainer {...{ href }}>
    <Overlay as="a" rel="nofollow" aria-hidden={true} {...{ zIndex }} />
  </LinkContainer>
);
