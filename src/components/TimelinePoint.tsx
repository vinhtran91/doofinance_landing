import React, { FC } from 'react'

import s from './TimelinePoint.module.css'

export const TimelinePoint:FC<{
  date: string,
  content: string[]
}> = ({date, content}) => {
  return (
    <div className={s.point}>
      <div className={s.date}>{date}</div>
      <div className={s.listevent}>
      {content.map(el => 
          <p key={el} className={s.item}>
          <CheckIcon /> &nbsp; {el}          
          </p>
      )}
      </div>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#59C09D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      className="icon icon-tabler icon-tabler-check"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M5 12l5 5L20 7"></path>
    </svg>
  );
}
