import React, { useEffect } from "react"
import api from "./api";

function App() {
  useEffect(()=>{
    api.get("/todos").then(({data})=>console.log(data))
  },[])
  return <div className="App"></div>;
}

export default App;
