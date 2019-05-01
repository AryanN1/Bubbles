import React from 'react';

export default function BubblesContainer(props) {
  return (
    <div className='bubbles-container'>
      <svg
        className='bubbles'
        viewBox='0 0 100 100'
        style={{ 'overflow': 'visible' }}
      >
        <g className='bubbles-small' strokeWidth='1'>
          {props.children}
        </g>
      </svg>
    </div>
  )
}
