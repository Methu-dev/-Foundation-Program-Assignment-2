export default function MoviesCard({ movie }) {
  return (
    <div className="overflow-hidden rounded-xl bg-gray-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="h-80 w-full overflow-hidden bg-gray-800">
        {" "}
        <img
          src={
            movie.image?.medium ||
            "https://via.placeholder.com/210x295?text=No+Image"
          }
          alt={movie.name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h2 className="truncate text-xl font-bold text-white"> {movie.name}</h2>
        <div className="mt-3 flex items-center justify-between text-sm text-gray-400">
          <span> ⭐ {movie.rating?.average || "N/A"} </span>
          <span> 📅 {movie.premiered?.slice(0, 4) || "N/A"} </span>
        </div>
        <button className="mt-5 w-full rounded-lg bg-yellow-400 px-4 py-2.5 font-semibold text-gray-950 transition hover:bg-yellow-300">
          See Details
        </button>
      </div>
    </div>
  );
}
