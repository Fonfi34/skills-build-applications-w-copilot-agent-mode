export const sampleUsers = [
    { id: 'user-1', name: 'Ava Thompson', email: 'ava@example.com', role: 'member' },
    { id: 'user-2', name: 'Noah Patel', email: 'noah@example.com', role: 'coach' },
    { id: 'user-3', name: 'Liam Garcia', email: 'liam@example.com', role: 'member' },
];
export const sampleTeams = [
    { id: 'team-1', name: 'Summit Striders', sport: 'Running', members: ['user-1', 'user-3'] },
    { id: 'team-2', name: 'Velocity Crew', sport: 'Cycling', members: ['user-2'] },
];
export const sampleActivities = [
    { id: 'activity-1', userId: 'user-1', type: 'Run', duration: 35, distanceKm: 6.4 },
    { id: 'activity-2', userId: 'user-3', type: 'Cycle', duration: 42, distanceKm: 18.2 },
];
export const sampleLeaderboard = [
    { rank: 1, userId: 'user-1', points: 1450 },
    { rank: 2, userId: 'user-3', points: 1320 },
    { rank: 3, userId: 'user-2', points: 1185 },
];
export const sampleWorkouts = [
    { id: 'workout-1', title: 'Strength Builder', difficulty: 'Intermediate', durationMinutes: 45 },
    { id: 'workout-2', title: 'HIIT Sprint', difficulty: 'Advanced', durationMinutes: 30 },
];
