import React from 'react'

export default function Card({item, id, handle}) {
  const itemClass = item.stat ? " active " + item.stat : '';

  return (
    <div className={'card' + itemClass} onClick={() => handle(id)}>
        <img src={item.img} alt=''/>
    </div>
  )
}
