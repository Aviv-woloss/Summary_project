function TrailerModal({ videoKey, onClose }) {
  if (!videoKey) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex justify-center items-center">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-red-500"
        >
          &times;
        </button>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          title="Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default TrailerModal;