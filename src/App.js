import "./App.css";
import React from "react";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

function App() {
  const courseGoals = [
    { id: "cg1", text: "Selesaikan Kursus" },
    { id: "cg2", text: "Pelajari Semua Topik Utama Kursus" },
    { id: "cg3", text: "Bantu semua orang di Q&A kursus" },
    { id: "cg4", text: "Coba komit dan push dari kantor" },
  ];
  return (
    <div className="course-goals">
      <h2>Tujuan Kursus</h2>
      <NewGoal />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
