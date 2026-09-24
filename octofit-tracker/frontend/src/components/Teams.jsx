import { useEffect, useState } from 'react';
import { normalizeResponseData } from '../api.js';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
    const apiUrl = codespaceName
      ? `https://${codespaceName}-8000.app.github.dev/api/teams/`
      : 'http://localhost:8000/api/teams/';

    async function loadTeams() {
      try {
        const response = await fetch(apiUrl, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        setTeams(normalizeResponseData(payload));
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Unable to load teams.');
        }
      }
    }

    loadTeams();

    return () => controller.abort();
  }, []);

  return (
    <section className="card shadow-sm">
      <div className="card-body">
        <h2 className="card-title mb-3">Teams</h2>
        {error ? <div className="alert alert-danger">{error}</div> : null}
        <div className="table-responsive">
          <table className="table table-striped mb-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Sport</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-muted text-center">
                    No teams found.
                  </td>
                </tr>
              ) : (
                teams.map((team) => (
                  <tr key={team._id || team.name}>
                    <td>{team.name}</td>
                    <td>{team.sport}</td>
                    <td>{Array.isArray(team.members) ? team.members.join(', ') : '—'}</td>
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

export default Teams;
