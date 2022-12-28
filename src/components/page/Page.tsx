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
        <div className='container'>
            <img alt="" src={image}/>
            <div className='title'>
                <h2>About me</h2>
            </div>
        </div>
    </div>
  )
}
