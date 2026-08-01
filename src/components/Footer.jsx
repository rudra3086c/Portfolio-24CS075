function Footer({ email }) {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        padding: "15px",
        marginTop: "20px",
      }}
    >
      <p>Contact: {email}</p>
      {console.log("Footer loaded")}
      <p>© 2026 Student Portfolio. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;