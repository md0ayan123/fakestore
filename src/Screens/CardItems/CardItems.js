import React from 'react'
import './cardItems.css'
import { useDispatchCart,useCart } from '../../Components/context/cart._context'

const CardItems = (props) => {

  let{id,category,image,description,price,rating,title}=props
  let dispatch=useDispatchCart();
  let data=useCart()

  
const handleAddToCart=async()=>{
  await dispatch({type:"ADD",id:id,price:price,category:category,image:image,rating:rating,title:title,description:description})
  console.log(data);

}
return (
  <div>
      <div class="card" >
        <div className="image-container">
        <img src={image} className='cardImg' alt="..."/>
        </div>
  
  <div class="card-body">
    <h5 class="card-title font-bold">Price ${price}</h5>
    <h5 class="card-title">{category}</h5>
    <h5 class="card-title">{title.slice(1,20)}...</h5>
    <p class="card-text">{description.slice(1,40)}...</p>
    <p>Rating: ⭐ {rating.rate} ({rating.count} reviews)</p> 
    <button class="btn btn-primary" onClick={()=>handleAddToCart()}>Add to Cart</button>
  </div>
</div>
    </div>
  )
  
  
}
export default CardItems
