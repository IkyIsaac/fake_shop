import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProduct,removeSelectedProduct } from '../redux/actions/ProductActions'

const ProductDetails = () => {
  const product = useSelector((state)=>state.product)
  const { image,title,price,category,description}= product
  const dispatch = useDispatch()
  const { productId }= useParams()
  console.log(product)

  
  const fetchProduct = async ()=>{
    const response= await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
        console.log("Error..",err)
    })
    console.log(response.data)
    dispatch(selectedProduct(response.data))
  }

  useEffect(()=>{
    if(productId &&productId!=="") fetchProduct();
    return ()=>{
      (dispatch(removeSelectedProduct()))
    }
  },[])

  return (
    <div className="ui  grid container">
      {Object.keys(product).length===0 ? (
        <div>...Loading</div>):
        (
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid" >
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className='ui fluid image' src={image}/>
            </div>
            <div className='column rp'>
              <h1>{title}</h1>
              <h2>
                <a className='ui teal tag label'>${price}</a>
              </h2>
              <h3>{category}</h3>
              <p>{description}</p>
              <div className='ui vertical animated button' tabIndex="0">
                <div className='hidden content'>
                  <i className='shop icon'></i>
                </div>
                <div className='visible content'>Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )}
    </div>
  )
}

export default ProductDetails