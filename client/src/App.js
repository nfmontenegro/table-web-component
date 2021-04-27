import React, { useEffect } from "react";
import "test-2021";

import "./App.css";

function App() {
  const elementRef = React.useRef(null);

  const [limit] = React.useState(4);
  const [total, setTotal] = React.useState(0);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const { current } = elementRef;
    if (current) {
      current.tHeads = ["First name", "Lastname", "Picture"];

      current.invokeCallback = value => invokeCallback(value);
      current.data = data;
      current.limit = limit;
      current.total = total;
    }
  });

  async function fetchData(page = 1) {
    const response = await fetch(
      `https://reqres.in/api/users?page=${page}&per_page=${limit}`
    );
    const { data, total } = await response.json();
    const mapData = data.map(value => ({
      firstname: value.first_name,
      lastname: value.last_name,
      avatar: value.avatar
    }));
    return { data: mapData, total };
  }

  useEffect(() => {
    async function getData() {
      const { data, total } = await fetchData();
      setTotal(total);
      setData(data);
    }

    getData();
  }, []);

  async function invokeCallback(page) {
    const { data } = await fetchData(page);
    setData(data);
  }

  return (
    <div className="App">
      {data.length > 0 ? <table-component ref={elementRef} /> : "Loading ..."}
    </div>
  );
}

export default App;
