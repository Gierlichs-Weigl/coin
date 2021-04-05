import { Document } from 'mongoose';

export interface UserInterface extends Document {
  id: string;
  name?: string;
}

export interface RandomUser {
  results: {
    picture: {
      large: string;
    };
    name: {
      first: string;
      last: string;
    };
  }[];
}
