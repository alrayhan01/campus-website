import React, { useState } from "react";

function ClassSchedule() {
  const [schedule, setSchedule] = useState([
    { day: "Monday", time: "10:00 AM", subject: "Math" },
    { day: "Tuesday", time: "11:00 AM", subject: "Physics" },
    { day: "Wednesday", time: "9:00 AM", subject: "Chemistry" },
    { day: "Thursday", time: "1:00 PM", subject: "Biology" },
    { day: "Friday", time: "2:00 PM", subject: "Computer Science" }
  ]);

  return (
    <div className="schedule-container">
      <h2>Class Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((classItem, index) => (
            <tr key={index}>
              <td>{classItem.day}</td>
              <td>{classItem.time}</td>
              <td>{classItem.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassSchedule;
