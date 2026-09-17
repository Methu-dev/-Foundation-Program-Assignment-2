import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-gray-800 pb-8 md:flex-row">
          <div className="text-center md:text-left">
            <Link to="/" className="text-2xl font-bold text-yellow-400">
              🎬 MovieExplorer
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Discover stories. Explore movies. Enjoy the journey.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Methu-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-yellow-400"
            >
              GitHub
            </a>
            <a
              href="https://www.facebook.com/engmethuislam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-yellow-400"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/engmethuislam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-yellow-400"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="pt-6 text-center text-sm text-gray-500">
          © 2026 MovieExplorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
