import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
    <div>
      <h1>Movie Listing Page</h1>
      <p>Total Shows: {movies.length}</p>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
}
