import React from 'react'

export default function Button({children, btn}) {
  return (
    <button onClick={btn} className='button'>{children}</button>
  )
}
