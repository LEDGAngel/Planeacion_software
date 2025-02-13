import React from 'react'

function Item({item}) {
  return (
    <div>
      <ol>
        <li>{item.name}</li>
        <li>{item.price}</li>
      </ol>
    </div>
  )
}

export default Item
