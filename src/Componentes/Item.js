import React from 'react'
import Boton from './Boton'

function Item({item, ondelete}) {
  return (
    <div>
      <ul>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>
          <Boton click ={() => ondelete(item.Id)} name={"X"} />
        </li>
      </ul>
    </div>
  )
}

export default Item
