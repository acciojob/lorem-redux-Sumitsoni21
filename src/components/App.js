import React, { useEffect } from "react";
import "./../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./loremSlice";

const App = () => {
  const dispatch = useDispatch();

  // const lorem = useSelector((state) => state.lorem.data);
  // const loading = useSelector((state) => state.lorem.loading);
  // const error = useSelector((state) => state.lorem.error);

  const { data, loading, error } = useSelector((state) => state.lorem || {});

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

  return (
    <div>
      {/* Do not remove the main div */}

      <h1>A Short Narration of lorem Ipsum</h1>

      {loading && <p> Loading......</p>}
      {error && <p> {error}</p>}

      {data && (
        <>
          {data.map((item) => (
            <div className="box">
              <p>Title: {item.title}</p>
              <p>Body: {item.body}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default App;
