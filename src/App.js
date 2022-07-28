import React, { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import ViewTodo from "./components/ViewTodo";


function App() {
  const [data, setData] = useState([]);

  const addHandler = (val) => {
    if(data.length >= 1) {
      const arrLength = data.length;
      const lastId = data[arrLength - 1]['id'];
      setData([...data, {...val, id: Number(lastId) + 1}]);
    } else {
      setData([...data, {...val, id: 1}]);
    }
  }

  const deleteHandler = (id) => {
    const deleteData = data.filter(item => {
      return item.id !== id;
    });
    setData(deleteData);
  }

  const editHandler = (id, obj) => {
    const edit = data.map(item => {
      if(item.id === obj.id) {
        return obj;
      }
      return item;
    });
    setData(edit);
  }

  console.log("data", data.length);
  return (
    <center className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home data={data} deleteHandler={deleteHandler} />} />
          <Route path="/create-todo" element={<CreateTodo addHandler={addHandler} />} />
          <Route path="/edit-todo/:id" element={<EditTodo data={data} editHandler={editHandler} />} />
          <Route path="/view-todo/:id" element={<ViewTodo data={data} />} />
        </Routes>
      </BrowserRouter> 
    </center>
  );
}

export default App;
