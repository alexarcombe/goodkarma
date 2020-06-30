import React from 'react';
import CustomShowcase from '../../components/Showcase';

const items = [
  {
    id: '1',
    name: 'image1.webp',
    description: 'image1',
    imageURL: '/images/image1.webp',
  },
  {
    id: '2',
    name: 'image2.webp',
    description: 'image2',
    imageURL: '/images/image2.webp',
  },
  {
    id: '3',
    name: 'image3.webp',
    description: 'image3',
    imageURL: '/images/image3.webp',
  },
  {
    id: '4',
    name: 'image4.webp',
    description: 'image4',
    imageURL: '/images/image4.webp',
  },
  {
    id: '5',
    name: 'image5.webp',
    description: 'image5',
    imageURL: '/images/image5.webp',
  },
];

function Showcase() {
  return <CustomShowcase items={items} duration={2000} />;
}

export default Showcase;
