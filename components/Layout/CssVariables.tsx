import { createGlobalStyle } from 'styled-components';

import { to } from 'Devices';

export const CssVariables = createGlobalStyle`
  html {
    --sans-serif: 'Darker Grotesque', -apple-system, sans-serif;
    --serif: 'Playfair Display', serif;

    --dark-gray: #222;
    --line-gray: #ecf0f3;
    --error-red: #d32f2f;

    --nav-height: 5.2rem;
    --logo-height: 1.9rem;

    --section-space: 3.8rem;

    --short-transition-duration: 250ms;
    --medium-transition-duration: 500ms;
    --long-transition-duration: 750ms;

    --min-z-index: 10;
    --med-z-index: 20;
    --max-z-index: 30;
    --extreme-z-index: 10000;

    @media ${to.tabletL} {
      --nav-height: 4.6rem;
      --section-space: 2.5rem;
    }
  }
`;
