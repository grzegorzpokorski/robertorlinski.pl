import { FC } from 'react';
import styled from 'styled-components';

import { ElementWithOpacity } from '../ElementWithOpacity';
import { Separator } from 'components/Separator';

import { getCategoryLink } from 'DataHelpers/categories';

import { Category as CategoryType } from 'Types/data';

type Props = {
  category: CategoryType;
  time?: string;
  date?: string;
};

export const PostMeta: FC<Props> = ({ category, time, date }) => {
  const categoryLink = getCategoryLink(category);

  return (
    <Meta>
      <Category href={categoryLink}>{category}</Category>
      <Separator />
      <span>{time || date}</span>
    </Meta>
  );
};

const Meta = styled.span`
  display: inline-flex;
  align-items: center;

  margin: 0.5rem 0 0.35rem;
`;

const Category = styled(ElementWithOpacity)`
  z-index: var(--max-z-index);
`;
