import React from 'react'
import '../pageStyle.css'

interface Props{
    title: string
    pageNumber: string
    description: string
    image: string
    imageFooter: string
}

export default function AboutPage({title, pageNumber, description, image, imageFooter }: Props) {
    return (
      <div className="component">
          {/* <div className='page' style={{background: `url(${image})`}}>
              <div className='title'>
                  <h2>{title}</h2>
              </div>
          </div> */}
          <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#252525'}}>
            <div style={{ height: '20%', width: '100%', background: `url(${image})`, backgroundPosition: 'top', backgroundSize: 'contain', backgroundRepeat: 'repeat-x'}}></div>
            <div style={{ height: '60%', width: '100%'}}></div>
            <div style={{ height: '20%', width: '100%', background: `url(${imageFooter})`, backgroundPosition: 'bottom', backgroundSize: 'contain', backgroundRepeat: 'repeat-x'}}></div>
          </div>
        </div>
    )
  }