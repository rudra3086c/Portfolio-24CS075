function Projects() {
  const projects = [
    "Student Portfolio Website",
    "MachineMitra AI",
    "Classroom Management System",
  ];

  return (
    <section style={{ padding: "20px" }}>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;