import React from "react";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
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
        {JSONDATA.map((val, key) => {
          return <div>{val.first_name}</div>;
        })}
      </ul>
    </div>
  );
}
export default App;
