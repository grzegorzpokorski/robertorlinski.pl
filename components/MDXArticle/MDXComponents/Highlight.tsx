import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

export const Highlight: FC<Props> = (props) => {
  if (props.className) {
    return <code {...props} />;
  }

  return <HighlightedCode {...props} />;
};

const HighlightedCode = styled.code`
  background-color: var(--highlight);

  font-family: var(--monospace);
  font-size: 0.85em;
`;
