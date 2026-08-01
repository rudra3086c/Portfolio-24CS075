function About({ bio }) {
  return (
    <section style={{ padding: "20px" }}>
      <h2>About Me</h2>
      {console.log("about loaded")}
      <p>{bio}</p>
    </section>
  );
}

export default About;