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
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error : {error}</div>;
  }

  return (
    <div className="body">
      {/* Do not remove the main div */}

      <h1>A Short Narration of Lorem Ipsum</h1>
      <div className="section">
        <div className="container">
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
      </div>
    </div>
  );
};

export default App;
