import React from 'react'
import './pageStyle.css'

interface Props{
    title: string
    pageNumber: string
    description: string
    image: string
}

export default function Page({title, pageNumber, description, image}: Props) {
  return (
    <div className="component">
        <div className='page' style={{background: `url(${image})`}}>
            <div className='title'>
                <h2>{title}</h2>
            </div>
        </div>
        </div>
  )
}
