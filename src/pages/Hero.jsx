import { BiSolidCameraMovie } from "react-icons/bi";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400 sm:text-base">
          Welcome to MovieExplorer
        </p>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
          Discover Your Next
          <span className="block text-yellow-400">Favorite Movie</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
          Explore amazing stories, discover new shows, and find your next
          favorite movie—all in one place.
        </p>

        <Link
          to="/movies"
          className="inline-block rounded-lg bg-yellow-400 px-7 py-3.5 text-base font-bold text-gray-950 shadow-lg transition duration-300 hover:bg-yellow-300 hover:shadow-yellow-400/30 sm:px-8 sm:py-4 sm:text-lg"
        >
          <span className="flex items-center gap-2">
            Explore Movies <BiSolidCameraMovie />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
