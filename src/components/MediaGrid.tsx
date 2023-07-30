// src/components/MediaGrid.tsx
import React from 'react';
import { Media } from '../types/media';

interface MediaGridProps {
  mediaItems: Media[];
}

const MediaGrid: React.FC<MediaGridProps> = ({ mediaItems }) => {
  return (
    <div className="media-grid">
      {mediaItems.map((media) => (
        <div key={media.id} className="media-item">
          <h2>{media.title}</h2>
          <p>Genre: {media.genre}</p>
          <p>Year: {media.year}</p>
          {/* Add more media details as needed */}
        </div>
      ))}
    </div>
  );
};

export default MediaGrid;
