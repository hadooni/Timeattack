import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ListForm from "./components/ListForm";

const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <div>
      <header>
        <h1>2024 파리 올림픽 메달 트래커</h1>
      </header>
      <InputForm countries={countries} setCountries={setCountries} />
      <ListForm countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default App;
