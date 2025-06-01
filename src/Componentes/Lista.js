import React from 'react'
import Item from './Item'

const Lista = ({ items, ondelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Delete?</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          {items.map((i)=>(<Item item={i} key={i.id} ondelete={ondelete} />))}  
        </tr>
      </tbody>
    </table>
  )
}

export default Lista
