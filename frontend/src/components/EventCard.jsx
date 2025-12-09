function EventCard({ title, category, date, location, onJoin }) {
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-5 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{category}</p>

        <div className="mt-4 text-gray-700 text-sm space-y-1">
          <p>
            <span className="font-medium">Date:</span> {date}
          </p>
          <p>
            <span className="font-medium">Location:</span> {location}
          </p>
        </div>
      </div>

      <button
        onClick={onJoin}
        className="mt-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Join Event
      </button>
    </div>
  );
}

export default EventCard;
