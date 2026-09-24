import mongoose from 'mongoose';
import connectDB from '../config/database.js';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Workout from '../models/Workout.js';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await connectDB();
        const users = [
            { name: 'Ava Thompson', email: 'ava@example.com', role: 'member' },
            { name: 'Noah Patel', email: 'noah@example.com', role: 'coach' },
            { name: 'Liam Garcia', email: 'liam@example.com', role: 'member' },
            { name: 'Emma Chen', email: 'emma@example.com', role: 'member' },
        ];
        const teams = [
            { name: 'Summit Striders', sport: 'Running', members: ['Ava Thompson', 'Liam Garcia'] },
            { name: 'Velocity Crew', sport: 'Cycling', members: ['Noah Patel', 'Emma Chen'] },
        ];
        const activities = [
            { userId: 'ava@example.com', type: 'Run', duration: 35, distanceKm: 6.4 },
            { userId: 'liam@example.com', type: 'Cycle', duration: 42, distanceKm: 18.2 },
            { userId: 'emma@example.com', type: 'Swim', duration: 28, distanceKm: 1.9 },
        ];
        const leaderboard = [
            { rank: 1, userId: 'ava@example.com', points: 1450 },
            { rank: 2, userId: 'liam@example.com', points: 1320 },
            { rank: 3, userId: 'emma@example.com', points: 1205 },
            { rank: 4, userId: 'noah@example.com', points: 1185 },
        ];
        const workouts = [
            { title: 'Strength Builder', difficulty: 'Intermediate', durationMinutes: 45 },
            { title: 'HIIT Sprint', difficulty: 'Advanced', durationMinutes: 30 },
            { title: 'Mobility Reset', difficulty: 'Beginner', durationMinutes: 20 },
        ];
        await User.deleteMany({});
        await Team.deleteMany({});
        await Activity.deleteMany({});
        await Leaderboard.deleteMany({});
        await Workout.deleteMany({});
        await User.insertMany(users);
        await Team.insertMany(teams);
        await Activity.insertMany(activities);
        await Leaderboard.insertMany(leaderboard);
        await Workout.insertMany(workouts);
        console.log('Seed the octofit_db database with test data');
        console.log('Database seeding complete');
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
    finally {
        await mongoose.disconnect();
    }
}
seedDatabase();
