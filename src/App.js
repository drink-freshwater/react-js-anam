import "./App.css";
import React, { useState } from "react";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Selesaikan Kursus" },
    { id: "cg2", text: "Pelajari Semua Topik Utama Kursus" },
    { id: "cg3", text: "Bantu semua orang di Q&A kursus" },
    { id: "cg4", text: "Coba komit dan push dari kantor" },
  ]);

  const addNewGoal = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoal) => prevCourseGoal.concat(newGoal));
  };
  return (
    <div className="course-goals">
      <h2>Tujuan Kursus</h2>
      <NewGoal onAddGoal={addNewGoal} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
