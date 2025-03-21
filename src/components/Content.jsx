import React from 'react'
import parse from 'html-react-parser'

const Content = ({description}) => {
  return (
    <div className='MainContent'>
      {parse(description)}
    </div>
  )
}

export default Content
