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
    return <h4>Loading....</h4>;
  }

  if (error) {
    return <div>Error : {error}</div>;
  }

  return (
    <div className="body">
      {/* Do not remove the main div */}

      <h4>A short Naration of Lorem Ipsum</h4>
      <div className="section">
        <ul className="container">
          {data && (
            <>
              {data.map((item) => (
                <li className="box">
                  <p>Title: {item.title}</p>
                  <p>Body: {item.body}</p>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
