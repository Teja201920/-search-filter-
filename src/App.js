import React, { useState } from "react";

function App() {
  // List of names
  const students = [
    "Tejaswarrao",
    "Prasanna",
    "Sai Teja",
    "Abhishek",
    "Dhilli Rao"
  ];

  // State for search input
  const [search, setSearch] = useState("");

  // Filter list based on search input
  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Search Filter Example</h1>

      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", fontSize: "16px", marginBottom: "20px" }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredStudents.map((student, index) => (
          <li
            key={index}
            style={{ margin: "8px", fontSize: "18px", color: "blue" }}
          >
            {student}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
