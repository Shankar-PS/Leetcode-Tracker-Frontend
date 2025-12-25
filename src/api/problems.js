import axios from "axios";


export async function fetchProblems() {
    const res = await fetch("https://leetcode-tracker-backend-nrml.onrender.com/problems");
    return res.json();
}
