import React from 'react'
import { FaBars, FaTimes, FaRegUserCircle, FaShoppingBag } from 'react-icons/fa'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useContext, useRef, useState } from 'react'
import { CartContext } from '../store'
import NavbarProdustDetail from '../smallcomponent/NavbarProdustDetail'
function Divbar() {
  // const Divbar=()=>{
  const [showCarIcon, setShowCarIcon] = useState(false)
  console.log(showCarIcon)
  const auth = localStorage.getItem('user')
  const navigate = useNavigate()

  //useLocation可以獲取當前路由的資訊(loaction)，pathname：url的當前路徑
  const { pathname } = useLocation()

  const logout = () => {
    localStorage.clear()
    navigate('/Memlogin')
  }

  const [state] = useContext(CartContext)
  const MoveNav = useRef(null)
  const MoveOut = () => {
    MoveNav.current.classList.toggle('c-n-Move')
  }

  // Conditionally render the component based on the current URL pathname
  if (pathname === '/Memlogin') {
    return null
  }
  if (pathname === '/Memregister') {
    return null
  }

  return (
    <div className="b-nav">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <FaBars />
      </label>
      <label className="logo">
        <Link to="/">
          <img
            src="./img/logo.svg"
            alt="黑碟"
            style={{ width: '60px', paddingbottom: '10px' }}
          />
        </Link>
      </label>
      <ul>
        <input type="b-checkbox" id="check" />
        <li>
          {' '}
          <label htmlFor="check" className="checkbtn1">
            <FaTimes />
          </label>
        </li>
        <li>
          <Link to="/Frontpage">首頁</Link>
        </li>
        <li>
          <Link to="/Customization">客製化</Link>
        </li>
        <li>
          <Link to="/ProductHome">黑膠唱片</Link>
        </li>
        <li>
          <Link to="/CartProcess">購物車</Link>
        </li>
        <li>
          <Link to="/MEdit">會員</Link>
        </li>
        <li>
          {auth ? (
            <Link onClick={logout} to="/Memlogin">
                登出 <FaRegUserCircle />
            </Link>
          ) : (
            <Link to="/Memlogin">
              會員登入 <FaRegUserCircle />
            </Link>
          )}
        </li>
        <li>
          <i className="c-n-btn" type="submit">
            <FaShoppingBag
              size={30}
              onClick={() => {
                MoveOut()
              }}
            />
            <span className="badge text-bg-danger position-absolute top-0 start-100 translate-middle">
              {state.cartList.length}
            </span>
          </i>
        </li>
      </ul>
      <div className="c-NavbarCartLayer ">
        <div className="c-NavbarCart c-NavbarZ bg-dark" ref={MoveNav}>
          <div className="c-NavbarCartText bg-dark">
            <h2>購物車</h2>
            <i>
              <FaTimes
                size={20}
                onClick={() => {
                  MoveOut()
                }}
              />
            </i>
          </div>
          <NavbarProdustDetail />
          <div className="c-NavbarCartbtn">
            <button>
              <h3>
                <Link to="/CartProcess">訂單結帳</Link>
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Divbar