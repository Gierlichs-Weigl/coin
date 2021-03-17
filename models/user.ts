import mongoose from 'mongoose';

import { UserInterface } from '@/interfaces/index';

const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
  },
  { collection: 'users', minimize: false }
);

export default mongoose.model<UserInterface>('users', UserSchema);
