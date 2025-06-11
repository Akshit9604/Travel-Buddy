import React, { useState } from "react";

function Register({ setUser }) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, bio });
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h2>👤 Create Your Profile</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Write a short bio"
        value={bio}
        required
        rows="4"
        onChange={(e) => setBio(e.target.value)}
      />

      <button type="submit">Let's Go</button>
    </form>
  );
}

export default Register;
