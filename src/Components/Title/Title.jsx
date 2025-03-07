/* eslint-disable react/prop-types */
import './Title.css';

// eslint-disable-next-line no-unused-vars
import React from 'react'

const Title = ({subTitle, title}) => {
  return (
    <div className="title">
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Title