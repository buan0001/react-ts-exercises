import { useEffect, useState } from "react";
import { BaseProps } from "../types";

/*
Exercise
part one --> provide the useEffect without a dependency array and clearInterval and see what happens
part two --> provide the useEffect with an empty dependency array and see what happens
part three --> add an return function  to clear the interval ()
part four --> Add a button to start and stop the interval via a boolean state variable to see what happens with values in the dependency array
*/
export default function UseEffectDemo({ title }: BaseProps) {
  const [count, setCount] = useState(0);
  const [runCount, setRunCount] = useState(false);

  useEffect(() => {
    if (!runCount) return;
    const i = setInterval(() => {
      setCount(prev => prev + 1);
      console.log(count);
    }, 1000);
    // "clean up" function - stops the effect again
    return () => clearInterval(i);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runCount]);

  return (
    <>
      <h2>{title}</h2>
      <p>{count}</p>

      <button onClick={() => setRunCount(prev => !prev)}>{runCount ? "Stop Count" : "Start Count"}</button>
    </>
  );
}
