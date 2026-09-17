import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          🎬 MovieExplorer
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-300 transition hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="text-gray-300 transition hover:text-yellow-400"
          >
            Movies
          </Link>
          <Link
            to="/movies"
            className="rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-gray-950 transition hover:bg-yellow-300"
          >
            Explore Movies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
