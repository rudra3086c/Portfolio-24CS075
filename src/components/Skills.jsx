function Skills({ skillList }) {
  return (
    <section style={{ padding: "20px" }}>
      <h2>Skills</h2>

      <ul>
        {skillList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {console.log("Skills loaded")}
    </section>
  );
}

export default Skills;