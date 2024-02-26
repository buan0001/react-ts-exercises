import { useState } from "react";
import "./App.css";
import Propsdemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView == "PropsDemo" ? <Propsdemo title="Prop demo"></Propsdemo> : null}
            {selectedView == "ListDemo" ? <ListDemo title="List demo"></ListDemo> : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
          </div>
        </div>
      </div>
    </>
  );
}

type ButtonProps = {
  onSelected: (selected: string) => void;
};

const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected, btnStyle: btnStyle } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("PropsDemo")}>
        Props demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("ListDemo")}>
        List demo
      </button>
    </>
  );
};
