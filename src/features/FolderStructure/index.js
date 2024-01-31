import React from "react";
import FolderStructure from "./FolderStructure";
import structure from "./FolderStructureJSON";
import "./FolderStructure.css";

const FolderStructureCall = () => {
  return (
    <div className="container">
      <FolderStructure structure={structure} />
    </div>
  );
};

export default FolderStructureCall;
