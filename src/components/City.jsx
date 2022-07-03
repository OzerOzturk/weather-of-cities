import React from "react";

function City({ weather }) {
  // console.log(weather);

  //const [show, setShow] = useState(false);

  return (
    <div className="container">
      <h1>Weather of the Cities</h1>
      {weather.map((w) => {
        return (
          <div key={w.id}>
            <h2>{w.name} </h2>
            <h3>{w.temperature}</h3>
            <img src={w.image} alt="image_name" />
          </div>
        );
      })}
    </div>
  );
}

export default City;

// <button onClick={() => setShow(!show)}>Show City</button>
