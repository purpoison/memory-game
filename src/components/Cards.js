import React from 'react';
import { useState } from 'react';
import Card from './Card';

export default function Cards() {
    const [items, setItems] = useState([
        { id: 1, img: '/memory-game/public/img/1.png', stat: ''},
        { id: 1, img: '/memory-game/public/img/1.png', stat: ''},
        { id: 2, img: '/memory-game/public/img/2.png', stat: ''},
        { id: 2, img: '/memory-game/public/img/2.png', stat: ''},
        { id: 3, img: '/memory-game/public/img/3.png', stat: ''},
        { id: 3, img: '/memory-game/public/img/3.png', stat: ''},
        { id: 4, img: '/memory-game/public/img/4.png', stat: ''},
        { id: 4, img: '/memory-game/public/img/4.png', stat: ''},
        { id: 5, img: '/memory-game/public/img/5.png', stat: ''},
        { id: 5, img: '/memory-game/public/img/5.png', stat: ''},
        { id: 6, img: '/memory-game/public/img/6.png', stat: ''},
        { id: 6, img: '/memory-game/public/img/6.png', stat: ''},
        { id: 7, img: '/memory-game/public/img/7.png', stat: ''},
        { id: 7, img: '/memory-game/public/img/7.png', stat: ''},
        { id: 8, img: '/memory-game/public/img/8.png', stat: ''},
        { id: 8, img: '/memory-game/public/img/8.png', stat: ''},
    ])
  return (
    <div className='container'>
        {items.map((item, index) => (
            <Card key={index} item = {item}/>
        ))}
    </div>
  )
}
