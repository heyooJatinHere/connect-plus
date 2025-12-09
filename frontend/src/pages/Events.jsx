import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import { fetchEvents } from "../api/events";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const res = await fetchEvents();
        setEvents(res.data.events);
      } catch (err) {
        console.log("Events Error:", err.response?.data || err.message);
      }
    };

    loadEvents();
  }, []);

  const handleJoin = (title) => {
    alert(`You joined: ${title}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 pt-24">
      <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard
            key={event._id}
            title={event.title}
            category={event.category}
            date={event.date}
            location={event.location}
            onJoin={() => handleJoin(event.title)}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
