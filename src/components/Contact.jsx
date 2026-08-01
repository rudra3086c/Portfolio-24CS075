import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  return (
    <section style={{ padding: "20px" }}>
      <h1>Contact Me</h1>

      <label>Message:</label>
      <br />

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        style={{
          padding: "8px",
          width: "300px",
          marginTop: "10px",
        }}
      />

      <p>
        <strong>Your Message:</strong> {message}
      </p>

      <p>Character Count: {message.length}</p>

      <button onClick={() => setShowHelp(!showHelp)}>
        {showHelp ? "Hide Help" : "Show Help"}
      </button>

      {showHelp && (
        <p style={{ color: "blue" }}>
          Enter your message above. It updates in real time!
        </p>
      )}
    </section>
  );
}

export default Contact;