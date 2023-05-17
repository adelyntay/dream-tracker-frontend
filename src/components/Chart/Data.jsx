import { useState, useEffect } from "react";

export default function Data() {
  const [data, setData] = useState([]);
  const [dreamCounts, setDreamCounts] = useState({});
  // const backendUrl = process.env.REACT_APP_BACKEND_URL;
  // const backendUrl = "/api";

  useEffect(() => {
    async function fetchPost() {
      try {
        const token = localStorage.getItem("token");
        // const response = await fetch("/api/dreams", {
        // const response = await fetch(`${backendUrl}/dreams`, {
          const response = await fetch(`/dreams`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setData(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchPost();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const counts = {};
      data.forEach((dreams) => {
        const type = dreams.type;
        if (type in counts) {
          counts[type] += 1;
        } else {
          counts[type] = 1;
        }
      });
      setDreamCounts(counts);
    }
  }, [data]);

  function getTotalDreams() {
    const total = data.totalDreams;
    return total;
  }

  function getDreamsCountByType(type) {
    if (type in dreamCounts) {
      return dreamCounts[type];
    } else {
      return 0;
    }
  }

  return (
    <div className="stats shadow">
  
  <div className="stat bg-[#674ea7]">
    <div className="stat-figure text-primary">
    <svg xmlns="" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Total Dreams Logged</div>
    <div className="stat-value text-secondary">{getTotalDreams()}</div>
  </div>

</div>
  );
}

