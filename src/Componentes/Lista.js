import React from 'react'
import Item from './Item'

const Lista = ({ items, ondelete }) => {
  return (
    <>
    {items.map((i)=>(<Item item={i} key={i.id} ondelete={ondelete} />))}
    </>
  )
}

export default Lista
