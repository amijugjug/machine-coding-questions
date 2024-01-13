import React, { useEffect, useState } from "react";

import "./InfiniteScroll.css";
const InfiniteScroll = () => {
  const list = [];
  const [count, setCount] = useState(50);

  for (let i = 0; i < count; i++)
    list.push(
      <div key={count} className="element">
        {i + 1}
      </div>
    );

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight
      )
        setCount(count + 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [count]);

  return <div className="infinite-scroll">{list}</div>;
};

export default InfiniteScroll;
