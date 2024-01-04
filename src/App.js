import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [change, setChange] = useState("");
  const [result, setResult] = useState([]);
  const [update, setUpdate] = useState("");
  const [show, setShow] = useState(true);

  const view = () => {
    setShow(!show);
  };

  const output = () => {
    setResult([...result, change]);
    setChange("");
  };

  const handleDelete = (index) => {
    const updatedResult = [...result];
    updatedResult.splice(index, 1);
    setResult(updatedResult);
  };

  const handleUpdate = (index) => {
    const updatedResult = [...result];
    updatedResult.splice(index, 1, update);
    setResult(updatedResult);
    setUpdate("");
  };

  const handleChange = (value, index) => {
    const updatechange = [...update];
    updatechange[index] = value;
    setUpdate(updatechange);
  };

  return (
    <div className="App">
      <h3>04.01.2024 Task</h3>
      <h1>CRUD Operation</h1>
      <div>
        <input
          type="text"
          value={change}
          onChange={(e) => {
            setChange(e.target.value);
          }}
          placeholder="Enter text..."
        />{" "}
        <button onClick={output}>Add</button>
      </div>
      <button onClick={view}>{!show ? "Hide Table" : "Show Table"}</button>
      {!show && result && (
        <table>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Name</th>
              <th>Update Inpute</th>
              <th>Button</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {result.map((value, index) => {
              return (
                <tr>
                  <td> {index + 1} </td>
                  <td> {value} </td>
                  <td>
                    <input
                      type="text"
                      value={update[index] || ""}
                      onChange={(e) => handleChange(e.target.value, index)}
                      placeholder="Enter updated text..."
                    />
                  </td>
                  <td>
                    <button
                      className="update"
                      onClick={() => handleUpdate(index)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      className="delete"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
