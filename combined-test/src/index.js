import React, { useState } from "react";
import ReactDOM from "react-dom";
import BarChart from "./BarChart";
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./Scene";
import Tree from "./Tree";
import data from "./data";

const App = () => {
  const [component, setComponent] = useState("barChart"); // Default component to render

  const { width, height } = useViewportSize();

  const renderComponent = () => {
    switch (component) {
      case "barChart":
        return <BarChart />;
      case "vertexCanvas":
        return (
          <Canvas width={width} height={height}>
            <Scene />
          </Canvas>
        );
      case "tree":
        return <Tree data={data} width={600} height={500} />;
      default:
        return <BarChart />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setComponent("barChart")}>Bar Chart</button>
        <button onClick={() => setComponent("vertexCanvas")}>Vertex Canvas</button>
        <button onClick={() => setComponent("tree")}>Tree</button>
      </nav>
      {renderComponent()}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
