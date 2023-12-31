import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

import "./TodoList.css";
const TodoList = () => {
  const [todos, setTodos] = useState({ items: [], meta: {} });
  const [pageNumber, setPageNumber] = useState(0);

  const fetchData = async (limit, skip) => {
    const response = await fetch(
      `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
    );
    const result = await response.json();
    return result;
  };

  const fillDataInTodoList = async (pageNumber) => {
    const todos = await fetchData(10 * pageNumber, 10 * pageNumber);
    setTodos({
      items: todos?.todos,
      meta: {
        total: todos?.total,
        skip: todos?.skip,
        limit: todos?.limit,
      },
    });
  };

  const onNextClick = async () => {
    await fillDataInTodoList(pageNumber + 1);
    setPageNumber(pageNumber + 1);
  };

  const onPreviousClick = async () => {
    await fillDataInTodoList(pageNumber - 1);
    setPageNumber(pageNumber - 1);
  };

  useEffect(() => {
    (async () => {
      await fillDataInTodoList(pageNumber);
    })();
  }, []);

  return (
    <div className="todoListContainer">
      <span className="todoListTitle">Todo List</span>
      <div className="todoList">
        {todos?.items?.length ? (
          todos?.items?.map((todo) => {
            return <TodoCard todoItem={todo} key={todo.id} />;
          })
        ) : (
          <span className="loadingText">Loading...</span>
        )}
      </div>
      <div className="todoListBottom">
        <div className="todoListButtonSContainer">
          <button
            className="previousButton"
            onClick={onPreviousClick}
            disabled={pageNumber <= 0}
          >
            Previous
          </button>
          <span className="pageNumberText">{pageNumber + 1}</span>
          <button
            className="nextButton"
            onClick={onNextClick}
            disabled={todos.meta?.total !== 150}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
