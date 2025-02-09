import React from "react";
import Login from "./Login";
import ClassSchedule from "./ClassSchedule";
import ClassReschedule from "./ClassReschedule";

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Campus Website</h1>
      <Login />
      <ClassSchedule />
      <ClassReschedule />
    </div>
  );
}

export default App;
