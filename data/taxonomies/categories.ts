import { ListedCategory } from 'Types/data';

import { images } from 'Images/categories';

export const categories: Array<ListedCategory> = [
  {
    name: 'Front-end',
    slug: 'front-end',
    image: images.frontEnd,
  },
  {
    name: 'WordPress',
    slug: 'wordpress',
    image: images.wordpress,
  },
  {
    name: 'Własne bloki w WordPress Gutenberg',
    slug: 'wlasne-bloki-w-wordpress-gutenberg',
    image: images.gutenberg,
  },
  {
    name: 'Dostępność',
    slug: 'dostepnosc',
    image: images.accesibility,
  },
  {
    name: 'Design',
    slug: 'design',
    image: images.design,
  },
  {
    name: 'Narzędzia',
    slug: 'narzedzia',
    image: images.tools,
  },
  {
    name: 'Praca',
    slug: 'praca',
    image: images.work,
  },
  {
    name: 'Produktywność',
    slug: 'produktywnosc',
    image: images.productivity,
  },
  {
    name: 'Nauka',
    slug: 'nauka',
    image: images.learning,
  },
  {
    name: 'Przemyślenia',
    slug: 'przemyslenia',
    image: images.thoughts,
  },
];
