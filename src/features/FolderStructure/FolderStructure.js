import React, { useState } from "react";

import "./FolderStructure.css";
const FolderStructure = ({ structure }) => {
  const [open, setOpen] = useState(false);
  if (!structure.isFolder) {
    return (
      <>
        <span className="title-text">📝 {structure.name}</span>
        <br />
      </>
    );
  }
  return (
    <>
      <span className="title-text" onClick={() => setOpen((prev) => !prev)}>
        📂 {structure.name}
      </span>
      <br />
      {open
        ? structure.items.map((item) => {
            return (
              <div className="title-text">
                <FolderStructure key={item.name} structure={item} />
              </div>
            );
          })
        : null}
    </>
  );
};

export default FolderStructure;
