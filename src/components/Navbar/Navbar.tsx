import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="mt-3 flex -space-x-2 overflow-hidden">
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src={"https://via.placeholder.com/150/771796"}
            alt="{user.handle}"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
