import React from 'react'
import '../pageStyle.css'
import './header.css'

interface Props{
    title: string
    pageNumber: string
    description: string
    image: string
}

export default function HeaderPage({title, pageNumber, description, image}: Props) {
    return (
      <div className="component">
          {/* <div className='page' style={{background: `url(${image})`}}>
              <div className='title'>
                  <h2>{title}</h2>
              </div>
          </div> */}
          <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#03272e'}}>
            <div style={{ height: 'calc(30% - 64px)', marginTop: '64px'}}>
              <div style={{width: '100%', height: 'calc(100% - 100px)', margin: '50px auto', display: 'flex', flexDirection: 'column', textAlign:'left', color: 'white', lineHeight: '0'}}>
                <div style={{width: '720px', height: '100%'}}>
                  <div className="screen glitch">
                    <div className="clock is-off"><p className="time" data-attr="MR FILIP">MR FILIP</p></div>
                    {/* <div className="figure"></div>
                    <div className="figure-mask"></div> */}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: '70%', width: '100%', background: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
          </div>
        </div>
    )
  }