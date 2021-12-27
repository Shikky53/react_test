import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="countries-list">
        {data.map((country) => {
         return <Card country={country} key={country.name} />;
        })}
      </ul>
    </div>
  );
};

export default Countries;
