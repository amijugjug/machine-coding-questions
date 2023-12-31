import "./App.css";
import DroneSimulator from "./features/DroneSimulator/DroneSimulator.js";
import InfiniteScroll from "./features/InfiniteScroll/InfiniteScroll.js";
import Stepper from "./features/Stepper/Stepper.js";
import TodoList from "./features/Todos/TodoList";

const Example1 = () => <h4>Example 1</h4>;
const Example2 = () => <h4>Example 2</h4>;
const Example3 = () => <h4>Example 3</h4>;
const Example4 = () => <h4>Example 4</h4>;
const Example5 = () => <h4>Example 5</h4>;

function App() {
  const onNextClick = () => {
    console.log("next click");
  };
  const onPreviousClick = () => {
    console.log("previous click");
  };
  return (
    <div className="App">
      {/* <Stepper onNextClick={onNextClick} onPreviousClick={onPreviousClick}>
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Example5 />
        <Example5 />
      </Stepper> */}
      {/* <InfiniteScroll /> */}
      {/* <TodoList /> */}
      <DroneSimulator />
    </div>
  );
}

export default App;
