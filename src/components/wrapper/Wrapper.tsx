import React, {useEffect, useState} from 'react';
import ReactPageScroller from 'react-page-scroller';
import axios from 'axios';
import ResponsiveAppBar from '../navigation/ResponsiveAppBar';
import Page from '../page/Page';
import './style.css'
import HeaderPage from '../page/header/HeaderPage';
import AboutPage from '../page/about/AboutPage';

export default function Wrapper() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(Number)
  const [activePage, setActivePage] = useState('HOME')

  const handlePageChange = (number: any) => {
    changeActivePage(number)
    setCurrentPage(number);
  };

  function changeActivePage(number: any){
    switch(number){
      case 0:
        setActivePage('HOME')  
      break;
      case 1:
        setActivePage('ABOUT')  
      break;
      case 2:
        setActivePage('WORK')  
      break;
      case 3:
        setActivePage('CONTACT')  
      break;
    }
  }

  const handleBeforePageChange = (number: any) => {
    // changeActivePage(number) 
  };

  const getData = async () => {
    setLoading(true);
    try {
      
      const {data: response} = await axios.get(process.env.REACT_APP_BASE_URL!,
        {
          headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${process.env.REACT_APP_API_KEY!}`
          }
        });
      setData(response.records);
      // console.log(response.records);
      
    } catch (error: any) {
      // console.error(error.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    getData()
  }, [activePage])

  

  return (
    <>
    <ResponsiveAppBar setPage={setCurrentPage} currentPage={currentPage} activePage={activePage} setActivePage={setActivePage}/>

    <ReactPageScroller
      pageOnChange={handlePageChange}
      onBeforePageScroll={handleBeforePageChange}
      customPageNumber={currentPage}
      >
      {/* <div className="component">
        <div className='home-bg' style={{background: `url(${"/images/landing-bg.png"})`}}>
        </div>
      </div> */}
      <HeaderPage title='About Me' description='about me text' image='/images/bg-new-forest.png' pageNumber='01'/>
      <AboutPage title='About Me' description='about me text' image='/images/leaves-fixed-shadow.png' imageFooter='/images/grass-path-fixed-shadow.png' pageNumber='01'/>
      {/* <Page title='About Me' description='about me text' image='/images/card-bg-first.png' pageNumber='01'/> */}
      <Page title='Work' description='about me text' image='/images/card-bg.png' pageNumber='02'/>
      <Page title='Contact' description='about me text' image='/images/card-bg.png' pageNumber='03'/>
        
        {/* <div className="component"> */}
          
          {/* <div>
            {data && data.map((item: any) => (
              <div key={item.id}>
                <h3>{item.fields.Name}</h3>
              </div>
            ))}
          </div> */}

          {/* <div className='container'>
            <h2>Home</h2>
          </div>
        </div> */}
        {/* <Page title='About Me' description='about me text' image='/images/book.png' pageNumber='01'/> */}
        {/* <div className="component">
          <div className='container'>
            <h2>Work</h2>
          </div>
        </div>
        <div className="component">
          <div className='container'>
            <h2>Contact</h2>
          </div>
        </div> */}
      </ReactPageScroller>
    </>
  );
}
