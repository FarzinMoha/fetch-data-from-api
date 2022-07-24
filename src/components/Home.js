import React, { useEffect, useState } from "react";
import Error from "./Error";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://jsonplaceholder.typicode.com/posts";
const initialState = [];

function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);

  // ============================remove tour button (tour.js) =================================== 

  const removeTour = (id) =>{
    const newTour = data.filter((tour) =>tour.id !== id)
    setData(newTour)
  }

    // ====================================FETCH DATA ===========================================

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tour = await response.json();
      setLoading(false);
      setData(tour.slice(0,10));
    } catch (error) {
      setLoading(false);
      setError(true)
    }
  };

  useEffect(()=>{
    fetchData()
    console.log(error)
  },[])

      // ====================================RENDER===========================================

  if (loading) {
    return <Loading />;
  } else if (data.length > 0) {
    return <Tours list={data} remove={removeTour} />;
  } else if(error) {
    return <Error />;
  }
}

export default Home;


