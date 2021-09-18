import styled from 'styled-components';

import { to } from 'Devices';

export const SectionTitle = styled.h2`
  margin: -0.2em 0 0.8em;
  font-size: clamp(1.5rem, 5vw, 4rem);

  @media ${to.laptopL} {
    font-size: clamp(1.5rem, 5vw, 3rem);
  }
`;
