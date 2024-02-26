// import {createRoot} from "ReactDOM"
// import { createRoot } from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an H1 Tag"),
    React.createElement("h2", {}, "I'm an H2 Tag"),
  ])
);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "1 - Hello World from React!"
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
// Render() method converts object into html and put it in browser
