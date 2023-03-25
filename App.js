import { CartContext, cartReducer, cartInit } from './store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useReducer } from 'react'
import Cart from './components/Cart'
import ShoppingPage from './components/ShoppingPage'
import CartProcess from './components/CartProcess'
import CreateOrder from './components/CreateOrder'
import LinePay from './components/LinePay'
//BigBrother
import VrList from './page/productList/VrList'
import ProductDt from './page/product/ProductDt'
//公版
import Divbar from './components/Divbar'
import Footer from './components/Footer'
//薈瑜
import Customization from './page/Customization'
import ProductHome from './page/ProductHome'
//微君
import MEdit from './page/MEdit'
import MPassword from './page/MPassword'
import MHistory from './page/MHistory'
import MWishlist from './page/MWishlist'
import MCoupon from './page/MCoupon'
//阿睿
import Frontpage from './page/Frontpage'
// import Loginmain from './components/Loginmain'
import Memlogin from './page/Memlogin'
import Memregister from './page/Memregister'
function App() {
  const reducer = useReducer(cartReducer, cartInit)
  return (
    <BrowserRouter>
      <CartContext.Provider value={reducer}>
        <Divbar />
        <Routes>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/ShoppingPage" element={<ShoppingPage />} />
          <Route path="/CartProcess" element={<CartProcess />} />
          <Route path="/CreateOrder" element={<CreateOrder />} />
          <Route path="/LinePay" element={<LinePay />} />
          {/* BigBrother */}
          <Route path="/VrList" element={<VrList />} />
          <Route path="/ProductDt" element={<ProductDt />} />
          {/* 薈瑜 */}
          <Route path="/Customization" element={<Customization />} />
          <Route path="/ProductHome" element={<ProductHome />} />
          {/* 微君 */}
          <Route path="/MEdit" element={<MEdit />} />
          <Route path="/MPassword" element={<MPassword />} />
          <Route path="/MHistory" element={<MHistory />} />
          <Route path="/MWishlist" element={<MWishlist />} />
          <Route path="/MCoupon" element={<MCoupon />} />
          {/* 阿睿 */}
          <Route path="/" element={<Frontpage />} />
          <Route path="/Memlogin" element={<Memlogin/>} />
          <Route path="/Memregister" element={<Memregister />} />
        </Routes>
        <Footer />
      </CartContext.Provider>
    </BrowserRouter>
  )
}

export default App
