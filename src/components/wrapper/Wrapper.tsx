import React, {useEffect, useState} from 'react';
import ReactPageScroller from 'react-page-scroller';
import axios from 'axios';
import ResponsiveAppBar from '../navigation/ResponsiveAppBar';

export default function Wrapper() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(Number)

  const handlePageChange = (number: any) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number: any) => {
    // console.log(number);
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
  }, [])

  

  return (
    <>
    <ResponsiveAppBar setPage={setCurrentPage} currentPage={currentPage}/>

    <ReactPageScroller
      pageOnChange={handlePageChange}
      onBeforePageScroll={handleBeforePageChange}
      customPageNumber={currentPage}
      >
        <div className="component">
          <h2>First Component</h2>
          {/* <div>
            {data && data.map((item: any) => (
              <div key={item.id}>
                <h3>{item.fields.Name}</h3>
              </div>
            ))}
          </div> */}
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
