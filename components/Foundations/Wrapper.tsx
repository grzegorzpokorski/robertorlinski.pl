import styled from 'styled-components';

import { to } from '../../helpers/styles/devices';

const Base = styled.section`
  margin-right: auto;
  margin-left: auto;

  @media ${to.phoneL} {
    width: 84%;
  }
`;

export const Wrapper = styled(Base)`
  width: 1170px;

  @media ${to.laptop} {
    width: 900px;
  }

  @media ${to.tabletL} {
    width: 690px;
  }

  @media ${to.tablet} {
    width: 500px;
  }
`;

export const NarrowWrapper = styled(Wrapper)`
  width: 740px;
`;

export const WideWrapper = styled(Base)`
  width: min(1350px, calc(100vw - 140px));

  @media ${to.tablet} {
    width: calc(100vw - 80px);
  }
`;
