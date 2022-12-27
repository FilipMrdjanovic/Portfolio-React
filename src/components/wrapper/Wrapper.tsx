import React, {useEffect, useState} from 'react';
import ReactPageScroller from 'react-page-scroller';
import axios from 'axios';
import ResponsiveAppBar from '../navigation/ResponsiveAppBar';
import './style.css'

export default function Wrapper() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(Number)
  const [activePage, setActivePage] = useState('HOME')

  const handlePageChange = (number: any) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number: any) => {
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
        <div className="component">
          {/* <div>
            {data && data.map((item: any) => (
              <div key={item.id}>
                <h3>{item.fields.Name}</h3>
              </div>
            ))}
          </div> */}
          <div className='container'>

            <h2>First Component</h2>
          </div>
        </div>
        <div className="component">
          <h2>Second Component</h2>
        </div>
        <div className="component">
          <h2>Third Component</h2>
        </div>
        <div className="component">
          <h2>Fourth Component</h2>
        </div>
      </ReactPageScroller>
    </>
  );
}
