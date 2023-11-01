// frontend/pages/index.js

import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/getall");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.text();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const intervalId = setInterval(() => {
      fetchData();
    }, 1000); // Her saniye veriyi almak için

    fetchData(); // Sayfa yüklendiğinde veriyi anında almak için

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div>Çıktı: {data}</div>
    </div>
  );
};

export default App;
