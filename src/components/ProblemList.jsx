import { useEffect, useState } from "react";
import { fetchProblems } from "../api/problems";

export default function ProblemList() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetchProblems().then(setProblems);
  }, []);

  if (problems.length === 0) return <p>No data</p>;

  return (
    <ul>
      {problems.map((p) => (
        <li key={p.id}>
          {p.problem_no} - {p.title} ({p.difficulty})
        </li>
      ))}
    </ul>
  );
}
