import React, { useState, useEffect } from "react";

function TripList({ trips, user }) {
  const [message, setMessage] = useState("");
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [userDestinations, setUserDestinations] = useState([]);

  useEffect(() => {
    const userTrips = trips.filter((trip) => trip.user === user.name);
    const destinations = userTrips.map((trip) => trip.destination.toLowerCase());
    setUserDestinations(destinations);
  }, [trips, user]);

  const handleContact = (trip) => {
    setSelectedTrip(trip);
    setMessage("");
  };

  const handleSend = () => {
    alert(
      `Message sent to ${selectedTrip.user}: "${message}" (This is a demo!)`
    );
    setSelectedTrip(null);
    setMessage("");
  };

  const matchingTrips = trips.filter(
    (trip) =>
      trip.user !== user.name &&
      userDestinations.includes(trip.destination.toLowerCase())
  );

  const otherTrips = trips.filter(
    (trip) =>
      trip.user !== user.name &&
      !userDestinations.includes(trip.destination.toLowerCase())
  );

  return (
    <div>
      <h2>Available Trips</h2>

      {matchingTrips.length > 0 && (
        <>
          <h3>🧭 Matching Destination Trips</h3>
          <ul>
            {matchingTrips.map((trip) => (
              <li key={trip.id}>
                <strong>{trip.destination}</strong><br />
                Dates: {trip.dates}<br />
                Posted by: {trip.user}<br />
                <em>{trip.desc}</em><br />
                <button onClick={() => handleContact(trip)}>Contact {trip.user}</button>
              </li>
            ))}
          </ul>
        </>
      )}

      {otherTrips.length > 0 && (
        <>
          <h3>🌍 Other Trips</h3>
          <ul>
            {otherTrips.map((trip) => (
              <li key={trip.id}>
                <strong>{trip.destination}</strong><br />
                Dates: {trip.dates}<br />
                Posted by: {trip.user}<br />
                <em>{trip.desc}</em><br />
                <button onClick={() => handleContact(trip)}>Contact {trip.user}</button>
              </li>
            ))}
          </ul>
        </>
      )}

      {matchingTrips.length === 0 && otherTrips.length === 0 && (
        <p>No trips posted yet by other users.</p>
      )}

      {selectedTrip && (
        <div className="modal">
          <h3>Message to {selectedTrip.user}</h3>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
          />
          <br />
          <button onClick={handleSend}>Send</button>
          <button onClick={() => setSelectedTrip(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default TripList;
