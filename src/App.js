import "./App.css";
import City from "./components/City";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [weather, setWeather] = useState([]);

  const url = "http://localhost:4000/";

  const getAllWeather = () => {
    axios
      .get(`${url}weather`)
      .then((res) => {
        const allWeather = res.data;
        //console.log(res);
        setWeather(allWeather);
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  //get data from fake weather API
  useEffect(() => {
    getAllWeather();
  }, []);

  return (
    <>
      <City weather={weather}  />
    </>
  );
}

export default App;
