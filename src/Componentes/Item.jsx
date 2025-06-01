import React from 'react'
import Boton from './Boton'
import { Link } from 'react-router-dom'

function Item({item, ondelete}) {
  return (
    <div>
      <ul>
        <Link to={"/items/" + item.id + "?q=react"}>
        <li>{item.name}</li>
        </Link>
        <li>{item.price}</li>
        <li>
          <Boton click ={() => ondelete(item.Id)} name={"X"} />
        </li>
      </ul>
    </div>
  )
}

export default Item
