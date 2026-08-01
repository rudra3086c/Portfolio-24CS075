function NavBar({ activeSection }) {
  const navItems = ["Home", "About", "Skills", "Contact"];

  return (
    <nav
      style={{
        backgroundColor: "#f4f4f4",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {navItems.map((item) => (
        <span
          key={item}
          style={{
            fontWeight: activeSection === item ? "bold" : "normal",
            color: activeSection === item ? "blue" : "black",
            cursor: "pointer",
          }}
        >
          {item}
        </span>
      ))}
      {console.log("NavBar loaded")}
    </nav>
  );
}

export default NavBar;