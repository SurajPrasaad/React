import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductList from '../components/ProductList/ProductList';

const AllProduct = () => {
  const [products,setProducts] = useState([]);


  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
      setProducts(()=>res.data);
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <>
    <ProductList products={products}/>
    </>
  )
}

export default AllProduct