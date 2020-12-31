import React, { useState } from "react";

function List() {
  const [data, setData] = useState(["A", "B", "C", "D", "E"]);
  const [name, setName] = useState(" ");
  // const changeHandler = (event) => {
  //   setName(event.target.value);
  // };
  const handleSubmit = e => {
    e.preventDefault(); //to prevent DOM from reloading the page
    if (!name) return; //if user submits empty form, do nothing

    setData([...data, name]);
    setName(" "); //set the value to be empty again to get ready for next input
  };
  const deleteData = () => {
    data.pop();
    setData([...data]);
  };
  return (
    <div>
      {data.map((x, index) => (
        <ul key={index}>
          <li>{x}</li>
        </ul>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button>Add</button>
      </form>
      <br />
      <button onClick={deleteData}>Remove</button>
    </div>
  );
}

export default List;
