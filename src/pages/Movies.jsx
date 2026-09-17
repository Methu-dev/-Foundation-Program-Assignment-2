import { useEffect, useState } from "react";
import MoviesCard from "../component/MoviesCard";
import MovieDetailsModal from "../component/MovieDetails";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async () => {
    if (!search.trim()) {
      return;
    }
    try {
      setLoading(true);
      setError("");

      const url = await fetch(
        `https://api.tvmaze.com/search/shows?q=${search}`,
      );
      if (!url.ok) {
        throw new Error("Failed to search movies");
      }
      const data = await url.json();
      const searchResults = data.map((item) => item.show);
      setMovies(searchResults);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const url = await fetch("https://api.tvmaze.com/shows");

        if (!url.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await url.json();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <div className="mx-auto mb-10 max-w-2xl my-4">
        <div className="flex overflow-hidden rounded-lg border border-gray-700 bg-gray-900">
          <input
            type="text"
            placeholder="Search for a movie... "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent px-5 py-3 text-white outline-none placeholder:text-gray-500"
          />

          <button
            onClick={handleSearch}
            className="bg-yellow-400 px-6 font-semibold text-gray-950 transition hover:bg-yellow-300"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            onDetails={setSelectedMovie}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </>
  );
}
