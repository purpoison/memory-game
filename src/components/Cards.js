import React from 'react';
import { useState } from 'react';
import Card from './Card';

export default function Cards() {
    const [items, setItems] = useState([
        { id: 1, img: '/img/1.png', stat: ''},
        { id: 1, img: '/img/1.png', stat: ''},
        { id: 2, img: '/img/2.png', stat: ''},
        { id: 2, img: '/img/2.png', stat: ''},
        { id: 3, img: '/img/3.png', stat: ''},
        { id: 3, img: '/img/3.png', stat: ''},
        { id: 4, img: '/img/4.png', stat: ''},
        { id: 4, img: '/img/4.png', stat: ''},
        { id: 5, img: '/img/5.png', stat: ''},
        { id: 5, img: '/img/5.png', stat: ''},
        { id: 6, img: '/img/6.png', stat: ''},
        { id: 6, img: '/img/6.png', stat: ''},
        { id: 7, img: '/img/7.png', stat: ''},
        { id: 7, img: '/img/7.png', stat: ''},
        { id: 8, img: '/img/8.png', stat: ''},
        { id: 8, img: '/img/8.png', stat: ''},
    ].sort(() => Math.random() - 0.5))

  function handle(id){
    alert(id)
    // const newItem = items.map(item => {

    // })
  }
    
  return (
    <div className='container'>
        {items.map((item, index) => (
            <Card key={index} item = {item} id={index} handle={handle}/>
        ))}
    </div>
  )
}
