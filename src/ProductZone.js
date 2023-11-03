import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './ProductZone.css';

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

         setData(response.data.data);
        console.log("hi",response.data.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
  }, []);
// console.log("hy",data[0])
  return (

    // <Products data={data}/>
   
    <div className="">
      <div  className='cards'>Product PlayList </div>
      <div className="card">
        {data.length>0? (
          data.map((item, index) => (
            <div key={index} className="card">
             <img src='../public/image/image' alt ="Product Image"/> 
              <div className="card-info">
      {/* <span className="card-category">{props.cat}</span> */}
            <h3 className="card-title">Name : {item.Name}</h3>
            <h3 className="card-title">Post_Ids:{item.Post_Ids}</h3>

            {/* <a href={props.link}>
              <button>watch now</button>
            </a> */}
    </div>
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


// const Product =styled.h1`
//  Display : flex;
//  justify-content: center;
 
 
 
// `;

// const ProductParagraph=styled.p`
// Display : flex;
//  justify-content: center

// `



         

 





