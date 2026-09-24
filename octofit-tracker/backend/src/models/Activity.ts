import mongoose, { Schema } from 'mongoose';

const activitySchema = new Schema(
  {
    userId: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    distanceKm: { type: Number, required: true },
  },
  { timestamps: true },
);

const Activity =  mongoose.model('Activity', activitySchema);

export default Activity;
