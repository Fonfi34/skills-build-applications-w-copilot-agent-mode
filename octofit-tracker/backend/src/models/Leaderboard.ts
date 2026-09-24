import mongoose, { Schema } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    rank: { type: Number, required: true },
    userId: { type: String, required: true },
    points: { type: Number, required: true },
  },
  { timestamps: true },
);

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

export default Leaderboard;
