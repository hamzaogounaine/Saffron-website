import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Ad } from './Ad'
import axios from 'axios'
import Products from './Products'
import Cart from './Cart'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Detail from './Detail'

const App = () => {
  const [dark, setDark] = useState(false)
  const [products, setProducts] = useState([])
  const [cartopen, setOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [cartProducts, setCartProds] = useState([])


  useEffect(() => {
    axios.get('http://localhost:8080/products')
      .then(data => { setProducts(data.data); console.log(data) })
  }, [])
  useEffect(() => {
    setCartProds(cart.map(val => {
      return products.find(el => el.id === val)
    }))
    console.log('Prodcuts', cartProducts)
  }, [cart, products])
  console.log('cart ', cart)

  return (
    <div className={dark ? 'dark' : ''}>
      <div className='dark:bg-neutral-800 '>
        <Ad />
        <Header setDark={setDark} dark={dark} setOpen={setOpen} cartopen={cartopen} cartProducts={cartProducts} />
        <Cart products={cartProducts} setOpen={setOpen} cartopen={cartopen} setCartProds={setCartProds} />
        <BrowserRouter >
          <Routes>
            <Route path='/' element={<Products products={products} setCart={setCart} cart={cart} />} />
            <Route path="/details/:id" element={<Detail products={products} setCart={setCart}  cart={cart} cartProducts={cartProducts}/>} />

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App