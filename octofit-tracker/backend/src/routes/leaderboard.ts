import { Router } from 'express';
import Leaderboard from '../models/Leaderboard.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const entries = await Leaderboard.find().sort({ rank: 1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch leaderboard', error });
  }
});

export default router;
