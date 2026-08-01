import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const navStyle = {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  };

  const getLinkStyle = (path) => ({
    textDecoration: "none",
    fontWeight: location.pathname === path ? "bold" : "normal",
    color: location.pathname === path ? "blue" : "black",
  });

  return (
    <nav style={navStyle}>
      <Link to="/" style={getLinkStyle("/")}>
        Home
      </Link>

      <Link to="/projects" style={getLinkStyle("/projects")}>
        Projects
      </Link>

      <Link to="/contact" style={getLinkStyle("/contact")}>
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;