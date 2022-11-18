import React, { useState } from "react"

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  let active;

  const renderItem = items.map((item, index) => {
    active = index === activeIndex ? 'active' : "";

    return (<React.Fragment key={item.title}>
      <div className={`title ${active}`}
        onClick={() => setActiveIndex(index)}
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