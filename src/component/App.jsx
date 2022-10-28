import React from 'react'

//Components
import Accordion from './Accordion'

const items = [
  {
    title: "What is JSX?",
    content: "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code."
  },
  {
    title: "Can web browsers read JSX directly?",
    content: "Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object "
  },
  {
    title: "What is the virtual DOM?",
    content: "DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects."
  }
]

export default function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}
