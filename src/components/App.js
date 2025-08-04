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

  // if (loading) {
  //   return <h4>Loading....</h4>;
  // }

  // if (error) {
  //   return <div>Error : {error}</div>;
  // }

  return (
    <div className="body">
      {/* Do not remove the main div */}

      <h1>A short Naration of Lorem Ipsum</h1>
      <h4>
        Below Contains A title and Body gotten froma random API, Please take
        your time to Review
      </h4>
      <div className="section">
        <ul className="container">
          {loading && <h4>Loading.......</h4>}
          {error && <h4>Error: {error}</h4>}
          {data && (
            <>
              {/* {data.map((item) => ( */}
                <li className="box">
                  <h1 className="title">Title: {data.title}</h1>
                  <p className="body">Body: {data.body}</p>
                </li>
              {/* ))} */}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
