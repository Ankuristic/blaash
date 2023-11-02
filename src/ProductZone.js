import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'

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
        console.log("hi",response.data[0])
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
// console.log("hy",data[0])
  return (

    // <Products data={data}/>
   
    <div className="App">
      <Product >Product PlayList </Product>
      <div className="card-grid">
        {data.length>0? (
          data.map((item, index) => (
            <div key={index} className="card">
              {/* <img src={item.thumbnailUrl} alt={item.title} /> */}
              <div>{item[0].Name} </div>
              <div> {item[0].PlayListId} </div>
             
              
            </div>
          ))
        ) : (
          <ProductParagraph>Loading...</ProductParagraph>
        )}
      </div>
    </div>
  );
}

export default ProductZone;


const Product =styled.h1`
 Display : flex;
 justify-content: center;
 
 
 
`;

const ProductParagraph=styled.p`
Display : flex;
 justify-content: center

`



         

 





