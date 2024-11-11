import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "20px",
        position: "sticky",
        top: 0,
        padding: "10px",
        backgroundColor: "#242424",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/post">Post</Link>
      <Link to="/todoes">Todoes</Link>
    </nav>
  );
}

export default Navbar;
