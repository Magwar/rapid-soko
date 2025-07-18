import React from 'react'

function Sidebar() {
  const categories = [
    "Monitors",
    "Headphones",
    "Screen Protectors",
    "Smart Watches",
    "Sound Bar",
    "Projectors",
    "Speakers",
    "Microphones",
    "Keyboards"
  ]
  return (
    <aside className="sidebar">
      <h3>Categories</h3>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            {/* <a href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}>{category}</a> */}
            {category}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar