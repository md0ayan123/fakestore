import './cardItems.css'
import { useDispatchCart,useCart } from '../../Components/context/cart._context'
 import { ToastContainer, toast } from 'react-toastify';


const CardItems = (props) => {

  let{id,category,image,description,price,rating,title}=props
  let dispatch=useDispatchCart();
  let data=useCart()


  
const handleAddToCart=async()=>{
  await dispatch({type:"ADD",id:id,price:price,category:category,image:image,rating:rating,title:title,description:description})
  toast("Added to card!");
}
return (
  <div>
      <div class="card" >
        <div className="image-container">
        <img src={image} className='cardImg' alt="..."/>
        </div>
  
  <div class="card-body">
    <h5 class="card-title">{title.slice(1,22)}...</h5>
    <p class="card-text">{description.slice(1,30)}...</p>
    <p>Rating: ⭐ {rating.rate} ({rating.count} reviews)</p> 
    <div className='d-flex justify-content-between align-items-center'>
    <span className='fw-bold'>${price}</span>
    <button class="btn btn-info btn-sm" onClick={()=>handleAddToCart()}>Add to Cart</button>
    </div>
  </div>
</div>
    </div>
  )
  
  
}
export default CardItems
