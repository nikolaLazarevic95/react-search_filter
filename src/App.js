import React, { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {JSONDATA.filter((user) =>
          user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((user, key) => {
          return (
            <div key={user.id}>
              <ul>
                <p>{user.first_name}</p>
              </ul>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
