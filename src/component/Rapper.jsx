import React from 'react'
import "../style/Rapper.css"

export default function Rapper({ components }) {
  return (
    <>
      <div className="rapper_box">
        <div className="content_box">
          {components}
        </div>
      </div>
    </>
  )
}
