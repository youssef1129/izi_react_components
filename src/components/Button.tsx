import React, { FC, MouseEventHandler } from 'react'

interface props{
    text?: string;
    click?: MouseEventHandler<HTMLDivElement> | undefined;
    Icon?: any;
    cssClass?: string;
}

export const Button:FC<props> = ({text,Icon,click,cssClass=''}) => {
  return (
    <div className={cssClass} onClick={click}>
      {
        text&&<span>{text}</span>
      }
        {
          Icon&&<Icon/>
        }
        
    </div>
  )
}

