import React, { useState } from "react";

function PostTrip({ user, setTrips, trips }) {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = {
      id: Date.now(),
      user: user.name,
      destination,
      dates,
      desc,
    };
    setTrips([newTrip, ...trips]);
    setDestination("");
    setDates("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Post Your Trip</h2>

      <input
        type="text"
        placeholder="Destination"
        value={destination}
        required
        onChange={(e) => setDestination(e.target.value)}
      />
      <br />

      <input
        type="date"
        value={dates}
        required
        onChange={(e) => setDates(e.target.value)}
      />
      <br />

      <textarea
        placeholder="Describe your plans / what you're looking for"
        value={desc}
        required
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />

      <button type="submit">Post Trip</button>
    </form>
  );
}

export default PostTrip;
