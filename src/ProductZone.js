import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from './components/Products';

function ProductZone(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList';
        const headers = {
          'x-api-key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
          'x-tenant-key': 'INDU140923',
        };
        const requestBody = {
        //   Index: 1,
        //   ContentType: [2],
        //   ProductCategory: [],
        //   PlayListCode: 'XL7OXUUX_638264173348576143',
        //   IsTagged: false,
    
            "Content_Type":2
        
        };

        const response = await axios.post(apiUrl, requestBody, { headers });

         setData(response.data);
        console.log("hi",response[0].data)
        // if (response.data && response.data.Name) {
        //     setData(response.data.feeds);
        //   } else {
        //     console.error('API response is missing expected data structure');
        //   }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
  }, []);
console.log("hy",data)
  return (

    // <Products data={data}/>
   
    <div className="App">
      <h1>Grid of Cards</h1>
      <div className="card-grid">
        {data.length>5? (
          data.map((item, index) => (
            <div key={index} className="card">
              {/* <img src={item.thumbnailUrl} alt={item.title} /> */}
              <div>{item[0].Name} </div>
              <div> {item[0].PlayListId} </div>
             
              
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default ProductZone;







         

 





