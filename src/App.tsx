import React from 'react';
import { Media } from './types/media';
import MediaGrid from './components/MediaGrid';
import mockMediaData from './mockdata/mockMediaData';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Other components and layout */}
      <MediaGrid mediaItems={mockMediaData} />
    </div>
  );
};

export default App;
