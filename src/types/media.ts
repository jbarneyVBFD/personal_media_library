// src/types/media.ts
  export interface Media {
    id: string;
    title: string;
    genre: string;
    year: number;
    actorsOrAuthors: string[];
    description: string;
    rating: number;
    reviews: Review[];
  }
  
  export interface Review {
    userId: string;
    text: string;
    public: boolean;
  }
  


  