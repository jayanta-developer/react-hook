import React, { useState } from "react"

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  // const [classActive, setClassActive] = useState("");npms
let active;
  const dropdownFun = (index) => {
    setActiveIndex(index)     
  }
  
  const renderItem = items.map((item, index) => {
    active = index === activeIndex ?'active' : "";    
    
    return (<React.Fragment key={item.title}>
      <div className={`title ${active}`}
        onClick={() => dropdownFun(index)}
      >
        <i className="dropdown icon"></i>
        {item.title}
      </div>
      <div className={`content ${active}`}>
        <p>{item.content}</p>
      </div>      
    </React.Fragment>
    )
  })
  return (
    <div className="ui styled accordion">
      {renderItem}      
    </div>
  )
}
export default Accordion