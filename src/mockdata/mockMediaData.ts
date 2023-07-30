// src/mockdata/mockMediaData.ts
import { Media } from '../types/media';

const mockMediaData: Media[] = [
  {
    id: '1',
    title: 'Sample Movie 1',
    genre: 'Action',
    year: 2020,
    actorsOrAuthors: ['Actor A', 'Actor B', 'Actor C'],
    description: 'A thrilling action movie.',
    rating: 4.7,
    reviews: [
      {
        userId: 'user1',
        text: 'Awesome movie! Highly recommended.',
        public: true,
      },
      {
        userId: 'user2',
        text: 'The action scenes were top-notch.',
        public: false,
      },
    ],
  },
  {
    id: '2',
    title: 'Sample Book 1',
    genre: 'Fantasy',
    year: 2018,
    actorsOrAuthors: ['Author X'],
    description: 'An epic fantasy novel.',
    rating: 4.5,
    reviews: [
      {
        userId: 'user3',
        text: 'I couldn\'t put it down. So captivating!',
        public: true,
      },
      {
        userId: 'user4',
        text: 'The world-building is fantastic.',
        public: true,
      },
    ],
  },
  // Add more media items as needed...
];

export default mockMediaData;
