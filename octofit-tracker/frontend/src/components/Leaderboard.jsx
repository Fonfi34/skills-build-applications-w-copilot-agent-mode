import { useEffect, useState } from 'react';
import { normalizeResponseData } from '../api.js';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
    const apiUrl = codespaceName
      ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`
      : 'http://localhost:8000/api/leaderboard/';

    async function loadLeaderboard() {
      try {
        const response = await fetch(apiUrl, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        setLeaderboard(normalizeResponseData(payload));
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Unable to load leaderboard.');
        }
      }
    }

    loadLeaderboard();

    return () => controller.abort();
  }, []);

  return (
    <section className="card shadow-sm">
      <div className="card-body">
        <h2 className="card-title mb-3">Leaderboard</h2>
        {error ? <div className="alert alert-danger">{error}</div> : null}
        <div className="table-responsive">
          <table className="table table-striped mb-0">
            <thead>
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-muted text-center">
                    No leaderboard entries found.
                  </td>
                </tr>
              ) : (
                leaderboard.map((entry) => (
                  <tr key={entry._id || entry.userId}>
                    <td>{entry.rank}</td>
                    <td>{entry.userId}</td>
                    <td>{entry.points}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Leaderboard;
