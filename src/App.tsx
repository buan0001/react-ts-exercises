import { useState } from "react";
import "./App.css";
import Propsdemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffect1";
import FetchDemo1 from "./exercises/FetchDemo1";
import EventDemo1 from "./exercises/EventDemo";


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
            {selectedView == "FormsUncontrolled" ? <FormUncontrolled title="Forms demo1"></FormUncontrolled> : null}
            {selectedView == "StateDemo1" ? <StateDemo1 title="StateDemo1"></StateDemo1> : null}
            {selectedView == "StateDemo2" ? <StateDemo2 title="StateDemo2"></StateDemo2> : null}
            {selectedView == "StateDemo3" ? <StateDemo3 title="StateDemo2"></StateDemo3> : null}
            {selectedView == "UseEffect1" ? <UseEffectDemo title="StateDemo2"></UseEffectDemo> : null}
            {selectedView == "FetchDemo1" ? <FetchDemo1 title="StateDemo2"></FetchDemo1> : null}
            {selectedView == "EventDemo" ? <EventDemo1 title="Event demo"></EventDemo1> : null}
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
      <button className="btn-w100" onClick={() => handleSelected("EventDemo")}>
        List demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("FormsUncontrolled")}>
        Form demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("StateDemo1")}>
      StateDemo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("StateDemo2")}>
      StateDemo2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("StateDemo3")}>
      StateDemo3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("UseEffect1")}>
      UseEffect1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("FetchDemo1")}>
      FetchDemo1
      </button>
    </>
  );
};
