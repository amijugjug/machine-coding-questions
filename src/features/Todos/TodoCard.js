import React from "react";

import "./TodoCard.css";
// {
//     "todos": [
//       {
//         "id": 11, // first 10 items were skipped
//         "todo": "Text a friend I haven't talked to in a long time",
//         "completed": false,
//         "userId": 39
//       },
//       {
//         "id": 12,
//         "todo": "Organize pantry",
//         "completed": true,
//         "userId": 39
//       },
//       {
//         "id": 13,
//         "todo": "Buy a new house decoration",
//         "completed": false,
//         "userId": 16
//       }
//     ],
//     "total": 150,
//     "skip": "10",
//     "limit": 3
//   }

const TodoCard = ({ todoItem }) => {
  return (
    <div className="todoCard">
      <span>{todoItem?.id}</span>
      <span>{todoItem?.todo}</span>
      {/* <span>{todoItem.id}</span> */}
    </div>
  );
};

export default TodoCard;
