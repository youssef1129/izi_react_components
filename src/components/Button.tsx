import React, { FC, MouseEventHandler } from 'react'
import '../styles/button.css'


interface props{
    text?: string;
    click?: MouseEventHandler<HTMLDivElement> | any;
    Icon?: any;
    cssClass?: string;
    size?: 'large' | 'small';
}

export const Button:FC<props> = ({size='small',text,Icon,click,cssClass=''}) => {
  return (
    <button className={`iziBtn ${size} ${cssClass}`} onClick={click}>
      {
        text&&<span>{text}</span>
      }
        {
          Icon&&<Icon/>
        }
        
    </button>
  )
}

