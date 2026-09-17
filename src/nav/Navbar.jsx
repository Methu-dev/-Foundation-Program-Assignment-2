import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-950 relative text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          🎬 MovieExplorer
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white md:hidden"
        >
          <IoMdMenu />
        </button>
        <div
          className={`${isOpen ? "flex" : "hidden"} absolute left-0 top-full z-50 w-full flex-col gap-4 bg-gray-950 p-5 md:static md:flex md:w-auto md:flex-row md:items-center md:bg-transparent md:p-0`}
        >
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
