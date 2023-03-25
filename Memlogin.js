import React from 'react'
import { useForm  } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
// import { MEMBERSHIPLOGIN } from '../../components/api_config'
// import Loginmain from '../components/Loginmain'
import axios from 'axios'
// import AuthContext from '../contexts/AuthContext'
import Swal from 'sweetalert2'

function Memlogin() {
  const navigate = useNavigate()
  // const { setMyAuth } = useContext(AuthContext)
  // const avigate = useNavigate()

  const {
    register, // state
    handleSubmit,
    formState: { errors }, // 錯誤樣式資訊
  } = useForm();
  const onSubmit = (data) => console.log(data);
    // 預設值帶入要透過defaultValues:{}
      // 立即檢測


  

  // 會員登入
  const Login = async (data, e) => {
    console.log(data, e)
    console.log('Login')
    // console.log(getValues())
    try {
      const response = axios.post(
        'http://localhost:3001/db-memberlogin/memlogin',
        {
          // email: email,
          // password: password,
        }
      )
      console.log(response.data)
      Swal.fire({
        title: '登入成功',
        text: '歡迎會員回來',
        icon: 'success',
        confirmButtonText: '完成',
      })

      // setMyAuth({
      //   authorized: true,
      // })

      // 登入失敗
      if (!response.data.success) {
        alert(`${response.data.error}`)
      }
      Swal.fire({
        title: '登入失敗',
        text: '帳號密碼錯誤',
        icon: 'error',
        confirmButtonText: '重新輸入',
      })
    } catch (error) {
      console.error(error)
    }
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     email: '',
  //     password: '',
  //     agree: 'false',
  //   },
  //   mode: 'onTouched',
  // })
  // const onSubmit = (e) => {
  //   e.preventDefault()
  // }

  return (
    <>
      <div className="b-box1">
        <img src="./img/301.png" alt="BCC" />
        {/* <!-- 會員登入 --> */}
        <div className="b-wrapper">
          <div className="title-text">
            <div className="title login">
              <Link to="/">
                <img src="./img/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="title signup">
              <Link to="/">
                <img src="./img/logo.svg" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="form2-container">
            <div className="slide-controls">
              <input
                type="radio"
                name="slide"
                id="login"
                checked
                style={{ display: 'none' }}
              />
              <input
                type="radio"
                name="slide"
                id="signup"
                style={{ display: 'none' }}
              />
              <label for="login" className="slide login">
              <Link to="/Memlogin">
              登入會員
              </Link>
              </label>
              <label for="signup" className="slide signup">
              <Link to="/Memregister">
              註冊會員
              </Link>
              </label>
              <div className="slider-tab"></div>
            </div>
            <div className="form2-inner">
              {/* 登入 */}
              <form
                action="#"
                className="login form2"
                onSubmit={handleSubmit(onSubmit)}
                // onSubmit={(e) => {
                //   e.preventDefault()
                //   Login()
                // }}
              >
                <div className="field">
                  <label className="lable1">電子信箱</label>
                  <input
                    type="email"
                    // onChange={(e) => {
                    //   setEmail(e.target.value)
                    // }}
                    className={`from-control ${errors.email && 'is-invalid'}`}
                    // name="email"
                    placeholder="電子信箱"
                    {...register('email', {
                      required: {
                        value: true,
                        message: '信箱為必填',
                      },
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Email格式錯誤',
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="b-invalid-feedback">
                      {errors?.email?.message}
                    </div>
                  )}
                </div>
                <div className="field">
                  <label className="lable1">密碼</label>
                  <input
                    type="password"
                    // onChange={(e) => {
                    //   setPassword(e.target.value)
                    // }}
                    className={`form-control ${
                      errors.password && 'is-invalid'
                    }`}
                    // name="password"
                    placeholder="密碼"
                    {...register('password', {
                      required: {
                        value: true,
                        message: '密碼為必填',
                      },
                      minLength: {
                        value: 8,
                        message: '最少不會低於8字元',
                      },
                      maxLength: {
                        value: 10,
                        message: '最多不會高於10字元',
                      },
                    })}
                  />
                  {errors.password && (
                    <div className="b-invalid-feedback">
                      {errors?.password?.message}
                    </div>
                  )}
                </div>
                {/* <div className="pass-link">
                <Link to="/">忘記密碼?</Link>
              </div> */}
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="登入" onClick={Login} />
                  登入
                </div>
                {/* <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Google登入"/>
              </div> */}
                {/* <div className="signup-link"></div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
          
  )
}

export default Memlogin
