import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";


function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchRepos = () => {
  setLoading(true);
  setError(null);

  setTimeout(() => {
  fetch("https://api.github.com/users/rudra3086c/repos")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch repositories");
      }
      return res.json();
    })
    .then((data) => setRepos(data))
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
},2000);
};
useEffect(() => {
  fetchRepos();
}, []);
const filteredRepos = repos.filter((repo) =>
  repo.name.toLowerCase().includes(search.toLowerCase())
);

if (loading) return <Spinner />;

if (error) {
  return (
    <ErrorMessage
      message={error}
      onRetry={fetchRepos}
    />
  );
}

return (
  <section style={{ padding: "20px" }}>
    <h1>My GitHub Repositories</h1>

    <input
      type="text"
      placeholder="Search repositories..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "10px",
        width: "300px",
        marginBottom: "20px",
      }}
    />

    {filteredRepos.map((repo) => (
      <div
        key={repo.id}
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "15px",
          marginBottom: "15px",
        }}
      >
        <h3>{repo.name}</h3>

        <p>
          ⭐ Stars: {repo.stargazers_count}
        </p>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
        >
          {repo.html_url}
        </a>
      </div>
    ))}
  </section>
);
}

export default Projects;