import React, { useEffect ,useState} from 'react'
import CardItems from '../CardItems/CardItems'
import Navbar from '../../Components/Navbar/Navbar'
import './home.css'
import { useCart } from '../../Components/context/cart._context'




const Home = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState('');
  const [products, setProducts] = useState([]);

  const[data,setData]=useState([])
  // const procduct=useCart()
  
const allProduct=async()=>{
  const response = await fetch('https://fakestoreapi.com/products')
  const result=await response.json()

  if (!response.ok) {
    console.log(result.error);
    return;
}
  if(response.ok){
    console.log('resultss',result);
    setData(result)
    
  }
}


useEffect(() => {
  const fetchCategories = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const data = await res.json();
    setCategories(data);
  };
  fetchCategories();
}, []);


useEffect(() => {
  const fetchProducts = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/category/${selectedCat}`);
      const data = await res.json();
      setData(data);
  };
  if(selectedCat){
    fetchProducts();
  }else{
    allProduct()
  }
}, [selectedCat]);

  useEffect(()=>{
    allProduct()
  },[])
 
  return (
    <div>
      <Navbar />
      <div className='page-box'>
       <div className='filter-section' style={{ padding: '20px' }}>
      <h4 className='mt-5' >Filter by Category</h4>
      <select className='option-category' value={selectedCat} onChange={(e) => setSelectedCat(e.target.value)}>
        <option>-selecte category-</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select> 

   
      <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
   




      </div>
    </div> 
     <div className='row p-4'>
      {data?.map((element,index)=>{
        
        
        return <div key={index} className='card-container col-md-4 mt-4' >
          <CardItems key={index} id={element.id} rating={element.rating} category={element.category} image={element.image} description={element.description} price={element.price} title={element.title}/>
        </div>
      })}
     </div>
    </div>
    </div>
  )
}

export default Home
