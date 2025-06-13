import { useState } from 'react';
import { useCart, useDispatchCart } from '../context/cart._context';
import './cart.css';

const Cart = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  let data = useCart();
  const dispatch = useDispatchCart();

  const [quantities, setQuantities] = useState(
    data.map(() => 1)
  );

  const handleQuantityChange = (index, delta) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index ? Math.max(1, q + delta) : q))
    );
  };
  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE', id });
  };
  const handleCheckout = () => {
    dispatch({ type: 'CLEAR' });
    setQuantities([]);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 4000);
  };

  if (data.length === 0) {
    return (
      <div className='container'>
        {showConfirmation && (
          <div className="confirmation-popup ">
            Order placed successfully!
          </div>
        )}
        <div className='m-5 text-center fs-3'>The Cart is Empty!</div>
      </div>
    );
  }



  return (
    <div className='container'>
      <div className='cart_heading'>
        <p style={{fontSize:"35px"}}>Shopping Cart</p>
        <p className="mt-3" style={{ fontSize: "20px" }}>Price</p>
      </div>
      <hr />
      <div className='cart-items'>
        {data.map((element, index) => (
          <div key={index}>
            <div className='cart-data'>
              <div className='d-flex gap-3'>
                <div className=' cart-content'>
                  <div className='d-flex gap-2'>
                  <p>{index + 1}</p>
                  <img
                    src={element.image}
                    style={{ width: '100px', height: '100px' }}
                    alt=''
                  />
                  </div>
                 
                     <div className='card-category'>
                  <p className='para-decription'> {element.description.slice(1, 120)}...</p>
                  <div className='d-flex gap-4 align-items-start '>
                    <div className='quantity-controls'>
                      <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                      <span className='mx-2'>{quantities[index]}</span>
                      <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                    </div>
                    <button
                      className='btn btn-danger btn-sm mt-2'
                      onClick={() => handleRemove(element.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                </div>
             
                <p className='mt-2 price' style={{ fontWeight: "bold", fontSize: "18px" }}>${(element.price * quantities[index]).toFixed(2)}</p>
              </div>


            </div>
            <hr className='hr' />
          </div>
        ))}
      </div>
      <div className="text-end mt-4" style={{ fontSize: "26px", }}>
        Subtotal: $
        {data.reduce((acc, item, index) => acc + item.price * quantities[index], 0).toFixed(2)}
      </div>
      <div className="text-end mt-2">
        <button className="btn btn-success" onClick={handleCheckout}>
          Checkout
        </button>
      </div>


    </div>
  );
};

export default Cart;

