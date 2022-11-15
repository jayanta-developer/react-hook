import React, { useState } from "react";

//Router
// import Route from '../router/Route'
import { Routes, Route, Link } from "react-router-dom";

//Components
import Navbar from "./Navbar";
import Accordion from "./Accordion";
import Count from "./Count";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import { DemoField } from "./DemoField";
import Rapper from "./Rapper";

const items = [
  {
    title: "What is JSX?",
    content:
      "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.",
  },
  {
    title: "Can web browsers read JSX directly?",
    content:
      "Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object ",
  },
  {
    title: "What is the virtual DOM?",
    content:
      "DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.",
  },
];

const options = [
  {
    label: "Red color",
    value: "Red",
  },
  {
    label: "Green color",
    value: "Green",
  },
  {
    label: "Blue color",
    value: "Blue",
  },
  {
    label: "Black color",
    value: "Black",
  },
  {
    label: "Pink color",
    value: "Pink",
  },
  {
    label: "Orange color",
    value: "Orange",
  },
  {
    label: "Yellow color",
    value: "Yellow",
  },
  {
    label: "Purple color",
    value: "Purple",
  },
  {
    label: "Brown color",
    value: "Brown",
  },
  {
    label: "Gold color",
    value: "Gold",
  },
  {
    label: "Lavender color",
    value: "Lavender",
  },
  {
    label: "SteelBlue color",
    value: "SteelBlue",
  },
  {
    label: "Olive color",
    value: "Olive",
  },
  {
    label: "White color",
    value: "White",
  },
  {
    label: "Teal color",
    value: "Teal",
  },
];

export default function App() {
  const [selectedColor, setSelectedColor] = useState(
    options[options.length - 1]
  );
  // const [selectNav, SetSelectNav] = useState("/");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accordion items={items} />} />
        <Route path="/count" element={<Count />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/list" element={<Search />} />
        <Route path="/components" element={<DemoField />} />
        <Route
          path="/dropdown"
          element={
            <Dropdown
              label="Select color"
              options={options}
              selectedValue={selectedColor}
              onSetSelectedValue={setSelectedColor}
            />
          }
        />
      </Routes>
    </>
  );
}
