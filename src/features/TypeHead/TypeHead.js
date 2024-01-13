import React, { useState } from "react";

import { useCustomDebounce } from "../../hooks/useCustomDebounce";
import { filterFruits } from "../../utils/service/api-service/getFruits";

import "./TypeHead.css";

const TypeHead = () => {
  const [items, setItems] = useState([]);

  const makeApiCall = (keyword) => {
    filterFruits(keyword).then((response) => {
      const _items = [];
      response.map((item, index) =>
        _items.push(
          <>
            <p key={item + index} className="suggestion-item">
              {item}
            </p>
            <hr className="seperator-line" />
          </>
        )
      );
      setItems(_items);
    });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value) {
      makeApiCall(value);
    } else {
      setItems([]);
    }
  };

  const handleSectionClick = (e) => {
    const value = e.target.textContent;
    document.getElementById("inputBox").value = value;
    makeApiCall(value);
  };

  const debouncedInputChange = useCustomDebounce(handleInputChange, 500);

  return (
    <div className="container">
      <h1>Autocomplete suggestion box</h1>
      <input
        id="inputBox"
        className="input-box"
        onKeyDown={debouncedInputChange}
      />
      <section
        className={`suggestion-container ${
          items.length ? "suggestion-container-show" : ""
        } `}
        onClick={handleSectionClick}
      >
        {items}
      </section>
    </div>
  );
};

export default TypeHead;
