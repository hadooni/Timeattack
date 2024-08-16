import React from "react";

const InputForm = ({ formValues, setFormValues, countries, setCountries }) => {
  const { name, gold, silver, bronze } = formValues;

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  // input 필드 초기화
  const init = () =>
    setFormValues({
      name: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    });

  // 추가
  const handleAddCountry = (event) => {
    event.preventDefault();
    if (!name) {
      alert("국가명을 입력해주세요!");
      return;
    }
    const newCountry = {
      id: new Date().getTime(),
      name: name,
      gold: +gold,
      silver: +silver,
      bronze: +bronze,
    };
    console.log(newCountry);
    const addedCountry = countries.find((country) => country.name === name);
    // 정렬
    const sortedCountry = [...countries, newCountry].sort(
      (a, b) => b.gold - a.gold
    );
    if (addedCountry) {
      alert("이미 등록된 국가입니다.");
      init();
      return;
    } else {
      setCountries(sortedCountry);
      init();
      return;
    }
  };

  // 업데이트
  const handleUpdate = (event) => {
    event.preventDefault();
    const targetCountry = countries.find((country) => country.name === name);
    if (!targetCountry) {
      alert("해당 국가가 없습니다!");
      init();
      return;
    }
    const updateCountry = countries.map((country) => {
      if (country.name === targetCountry.name) {
        return {
          ...country,
          gold: gold,
          silver: silver,
          bronze: bronze,
        };
      } else {
        return country;
      }
    });
    setCountries(updateCountry);
    init();
  };

  return (
    <form>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="국가입력"
      />
      <input id="gold" type="number" value={gold} onChange={handleChange} />
      <input id="silver" type="number" value={silver} onChange={handleChange} />
      <input id="bronze" type="bronze" value={bronze} onChange={handleChange} />
      <button onClick={handleAddCountry}>국가추가</button>
      <button onClick={handleUpdate}>업데이트</button>
    </form>
  );
};

export default InputForm;
