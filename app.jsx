import React, { useState } from "react";
import Register from "./components/Register";
import PostTrip from "./components/PostTrip";
import TripList from "./components/TripList";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [trips, setTrips] = useState([]);

  const handleLogout = () => setUser(null); // switch user

  return (
    <div className="container">
      <h1>Solo Travel Buddy Finder</h1>
      {!user ? (
        <Register setUser={setUser} />
      ) : (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout} className="logout-btn">Switch User</button>
          <PostTrip user={user} setTrips={setTrips} trips={trips} />
          <TripList trips={trips} user={user} />
        </>
      )}
    </div>
  );
}

export default App;

