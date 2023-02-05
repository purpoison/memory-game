import React from 'react'

export default function Card({item, id, handle}) {
  return (
    <div className='card' onClick={() => handle(id)}>
        <img src={item.img} alt=''/>
    </div>
  )
}
