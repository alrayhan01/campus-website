import React, { useState } from "react";

function ClassReschedule() {
  const [newTime, setNewTime] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleReschedule = (e) => {
    e.preventDefault();
    console.log("Class rescheduled to", newDate, newTime);
    // এখানে আপনি ক্লাস রিসিডিউল লজিক লিখতে পারেন।
  };

  return (
    <div className="reschedule-container">
      <h2>Reschedule Class</h2>
      <form onSubmit={handleReschedule}>
        <div>
          <label>New Date:</label>
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>New Time:</label>
          <input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reschedule</button>
      </form>
    </div>
  );
}

export default ClassReschedule;
