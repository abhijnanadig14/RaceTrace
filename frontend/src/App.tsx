import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// home components
import NextSession from "./components/home/NextSession";
import SessionLocation from "./components/home/SessionLocation";
// import SessionInfo from "./components/home/SessionInfo";
// import CircuitInfo from "./components/home/CircuitInfo";
// import DriverStandings from "./components/home/DriverStandings";
// import ConstructorStandings from "./components/home/ConstructorStandings";

type Session = {
  session_key: number;
  session_name: string;
  date_start: string;
  date_end: string;
  meeting_key: number;
  location: string;
  country_name: string;
  country_code: string;
  year: number;
};

function App() {
  const [selectedPage, setSelectedPage] = useState("Home");
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const now = new Date();
        const dateStart = now.toISOString();

        const response = await fetch(
          `https://api.openf1.org/v1/sessions?date_start>${dateStart}`,
        );

        const data = await response.json();

        setSessions(data);

        console.log("Sessions:", data[0]);
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    };

    fetchSessions();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0E0F11]">
      <div className="w-72">
        <Sidebar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>

      <div className="flex-1">
        <Navbar selectedPage={selectedPage} />

        {selectedPage === "Home" && (
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-4 px-4">
            <NextSession sessions={sessions} />
            <SessionLocation sessions={sessions} />
            {/* 
            <SessionLocation sessions={sessions} />
            <SessionInfo sessions={sessions} />
            <CircuitInfo sessions={sessions} />
            <DriverStandings />
            <ConstructorStandings />
            */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
