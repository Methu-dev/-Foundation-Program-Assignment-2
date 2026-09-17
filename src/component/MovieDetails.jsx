import { FaStar } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import { IoTime } from "react-icons/io5";
import { MdDateRange, MdEmojiEmotions } from "react-icons/md";

export default function MovieDetailsModal({ movie, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-gray-900 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/70 px-3 py-2 text-xl text-white hover:bg-yellow-400 hover:text-black"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2">
          <div className="h-full min-h-[400px]">
            <img
              src={
                movie.image?.original ||
                movie.image?.medium ||
                "https://via.placeholder.com/500x700?text=No+Image"
              }
              alt={movie.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-bold">{movie.name}</h2>

            <div className="mt-4 space-y-2 text-gray-300">
              <p className="flex items-center gap-1">
                <FaStar className="text-yellow-400" /> Rating:{" "}
                <span className="text-yellow-400">
                  {movie.rating?.average || "N/A"}
                </span>
              </p>

              <p className="flex items-center gap-1">
                <MdDateRange className="text-white" /> Released:{" "}
                {movie.premiered || "N/A"}
              </p>

              <p className="flex items-center gap-1">
                <MdEmojiEmotions className="text-green-700" /> Genre:
                {movie.genres?.length ? movie.genres.join(", ") : "N/A"}
              </p>

              <p className="flex items-center gap-1">
                <GrLanguage className="text-blue-600" /> Language:{" "}
                {movie.language || "N/A"}
              </p>

              <p className="flex items-center gap-1">
                <IoTime className="text-red-400" /> Runtime:{" "}
                {movie.runtime || "N/A"} minutes
              </p>

              <p className="flex items-center gap-1">
                <FiTv className="text-green-300" /> Status:{" "}
                {movie.status || "N/A"}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="mb-2 text-xl font-semibold text-yellow-400">
                Overview
              </h3>

              <p className="leading-7 text-gray-300">
                {movie.summary
                  ? movie.summary.replace(/<[^>]*>/g, "")
                  : "No summary available."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
