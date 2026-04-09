import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link className="navbar" to="/books">Books</Link> {" "}
      <Link className="navbar" to="/quotes">Quotes</Link>
    </nav>
  );
}

export default Navbar;