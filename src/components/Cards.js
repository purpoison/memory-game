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
      
    const [prev, setPrev] = useState(-1);
    
  function check(current){
    if(items[current].id == items[prev].id){
      items[current].stat = 'correct';
      items[prev].stat = 'correct';
      setItems([...items]);
      setPrev(-1);
    }else{
      items[current].stat = 'wrong';
      items[prev].stat = 'wrong';
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = '';
        items[prev].stat = '';
        setItems([...items]);
        setPrev(-1);
      }, 1000)
    }
  }  
  function ifEnd(){
    let ifEnd = 0;
    items.forEach(item => {
      if(item.stat != ''){
        return ifEnd++;
      }
      console.log(ifEnd)
    })
  }

  function handle(id){
    if(prev === -1){
      items[id].stat = 'active';
      setItems([...items]);
      setPrev(id);
    }else{
      check(id)
    }
  }
    
  return (
    <div className='container'>
        {items.map((item, index) => (
            <Card key={index} item = {item} id={index} handle={handle}/>
        ))}
    </div>
  )
}
