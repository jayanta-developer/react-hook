import React, { useState } from "react";

//Router
// import Route from '../router/Route'
import { Routes, Route, Link } from "react-router-dom";
//data
import { items, options } from "../data"
//Action Creator
import { SelectSong } from "../actions"


//Components
import Navbar from "./Navbar";
import Accordion from "./Accordion";
import Count from "./Count";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import { DemoField } from "./DemoField";
import Songs from "./songs/";
import Rapper from "./Rapper";


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
        <Route path="/song" element={<Songs />} />
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
