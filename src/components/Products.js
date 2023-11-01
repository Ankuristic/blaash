
import styled from 'styled-components'
const Products = ({data:productplaylist}) => {
  return (
    <>
    
        <ProductCard>
         {
            productplaylist?.map((item,index)=>
            
            <Productcard key ={item.Name}
            
            >


            </Productcard>)
         }
        </ProductCard>
    
    </>
  )
}

export default Products

const ProductCard =styled.div``;

const Productcard =styled.div``

