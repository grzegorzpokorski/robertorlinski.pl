import { FC, Fragment } from 'react';

import { Link } from '../Link';
import { P } from '../P';

import { Text } from '../../types/data';

type Props = {
  text: Array<Text>;
};

export const TextWithLinks: FC<Props> = ({ text }) => (
  <P>
    {text.map(({ type, text, href }, i) => (
      <Fragment key={`text-element-${i}`}>
        {type === 'text' ? (
          text
        ) : type === 'internal-link' ? (
          <Link href={href} withLineVisible>
            {text}
          </Link>
        ) : (
          <Link href={href} external withLineVisible>
            {text}
          </Link>
        )}
      </Fragment>
    ))}
  </P>
);
