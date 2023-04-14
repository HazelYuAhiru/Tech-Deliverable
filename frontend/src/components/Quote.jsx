import React from 'react'

const Quote = ({quote}) => {
  return (
    <div className='Squote'>
        <p>From: {quote.name}</p>
        <p>Quote: {quote.message}</p>
        <p>Time: {quote.time}</p>
    </div>
  )
}

export default Quote