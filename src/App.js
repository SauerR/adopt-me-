import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Fluf" animal="Cat" color="Grey" />
      <Pet name="Jerry" animal="Dog" color="Brown" />
      <Pet name="Ralph" animal="Bird" color="Yellow" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
