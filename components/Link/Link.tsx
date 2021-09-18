import { FC } from 'react';

import { UnderlinedLink } from '../UnderlinedLink';
import { LinkContainer } from '../LinkContainer';

import { Link as LinkType } from 'Types/links';
import { InlineStyle } from 'Types/styled-components';

export const Link: FC<LinkType> = ({ children, href, withUnderlineInvisible }) => {
  const lineVisibility = (
    withUnderlineInvisible
      ? undefined
      : {
          '--line-size-initial': '100% 1px',
          '--line-size-hovered': '0 1px',
          '--line-position-initial': '0 100%',
          '--line-position-hovered': '100% 100%',
        }
  ) as InlineStyle;

  const isExternal = href.includes('http');

  return isExternal ? (
    <UnderlinedLink href={href} target="_blank" rel="noreferrer" style={lineVisibility}>
      {children}
    </UnderlinedLink>
  ) : (
    <LinkContainer href={href}>
      <UnderlinedLink style={lineVisibility}>{children}</UnderlinedLink>
    </LinkContainer>
  );
};
