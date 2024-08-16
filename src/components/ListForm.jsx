import React from "react";

const ListForm = ({ countries, setCountries }) => {
  // 삭제
  const handleDelete = (id) => {
    const deletedCountry = countries.filter((country) => country.id !== id);
    setCountries(deletedCountry);
  };
  return (
    <>
      {countries.map((country) => (
        <div className="country" key={country.id}>
          <div>{country.name}</div>
          <div>{country.gold}</div>
          <div>{country.silver}</div>
          <div>{country.bronze}</div>
          <button onClick={() => handleDelete(country.id)}>삭제</button>
        </div>
      ))}
    </>
  );
};

export default ListForm;
