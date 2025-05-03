import React, { useState } from "react";

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const inputVal = inputValue.trim();
    if (inputVal.length <= 1) return;
    // setCategories((categories) => [...categories, inputValue]);
    onNewValue(inputVal);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={(event) => onInputChange(event)}
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
      />
    </form>
  );
};
