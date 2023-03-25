import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { MEMLOGIN } from '../api/api_config'
// import Loginmain from '../components/Loginmain'
import axios from 'axios'
// import AuthContext from '../contexts/AuthContext'
import Swal from 'sweetalert2'

function Memregister() {
  const navigate = useNavigate()

  const {
    register, // state
    handleSubmit,
    formState: { errors }, // 錯誤樣式資訊
  } = useForm();
  const onSubmit = (data) => console.log(data);
    // 預設值帶入要透過defaultValues:{}
      // 立即檢測

  // const [nameReg, setNameReg] = useState('')
  // const [emailReg, setEmailReg] = useState('')
  // const [mobileReg, setMobileReg] = useState('')
  // const [passwordReg, setPasswordReg] = useState('')
  // const [birthdayReg, setBirthdayReg] = useState('')

  // 會員註冊
  const memberRegister = async (data) => {
    axios.defaults.withCredentials = true
    await axios.put(MEMLOGIN, data).then((response) => {
      if (response.data.success) {
        alert('註冊成功')
        console.log(response.data)
        Swal.fire({
          title: '註冊成功',
          text: '歡迎加入會員',
          icon: 'success',
          confirmButtonText: '完成',
        })
        navigate('/Frontpage')
      }
    })
  }


  // const memberRegister = async (data, e) => {
  //   console.log('memberRegister')
  //   console.log(data, e)
  //   // console.log(getValues())
  //   // console.log({
  //   //   name: nameReg,
  //   //   email: emailReg,
  //   //   mobile: mobileReg,
  //   //   password: passwordReg,
  //   //   birthday: birthdayReg,
  //   // })
  //   axios
  //     // .post('http://localhost:3001/db-memregister/memregister', {
  //       .put('MEMREGISTER')
  //       // name: nameReg,
  //       // email: emailReg,
  //       // mobile: mobileReg,
  //       // password: passwordReg,
  //       // birthday: birthdayReg,
  //     })
  //     .then(function (response) {
  //       console.log(response)
  //       Swal.fire({
  //         title: '註冊成功',
  //         text: '歡迎加入會員',
  //         icon: 'success',
  //         confirmButtonText: '完成',
  //       })
  //       navigate('/Frontpage')

  //       // setMyAuth({
  //       //   authorized: true,
  //       // })
  //     })
    // .catch(function (error) {
    //   console.error(error)
    // })
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
              {/* 註冊會員 */}
              <form
                action="#"
                className="signup form2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="field">
                  <label className="lable1">用戶名</label>
                  <input
                    type="text"
                    // id="name"
                    // name="name"
                    // onChange={(e) => setNameReg(e.target.value)}
                    className={`form-control ${
                      errors.recipient && 'is-invalid'
                    }`}
                    placeholder="用戶名"
                    {...register('name', {
                      required: {
                        value: true,
                        message: '用戶名為必填',
                      },
                      minLength: {
                        value: 3,
                        message: '最少不會低於3字元',
                      },
                      maxLength: {
                        value: 5,
                        message: '最多不會高於5字元',
                      },
                    })}
                  />
                  {errors.nameReg && (
                    <div className="b-invalid-feedback">
                      {errors?.nameReg?.message}
                    </div>
                  )}
                </div>
                <div className="field">
                  <label className="lable1">電子信箱</label>
                  <input
                    type="email"
                    // id="emailReg"
                    // name="emailReg"
                    // onChange={(e) => setEmailReg(e.target.value)}
                    className={`from-control ${
                      errors.emailReg && 'is-invalid'
                    }`}
                    placeholder="電子信箱"
                    {...register('emailReg', {
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
                  {errors.emailReg && (
                    <div className="b-invalid-feedback">
                      {errors?.emailReg?.message}
                    </div>
                  )}
                </div>
                <div className="field">
                  <label className="lable1">手機電話</label>
                  <input
                    type="number"
                    // id="mobileReg"
                    // name="mobileReg"
                    // onChange={(e) => setMobileReg(e.target.value)}
                    className={`form-control ${
                      errors.numberReg && 'is-invalid'
                    }`}
                    placeholder="電話號碼"
                    {...register('mobileReg', {
                      required: {
                        value: true,
                        message: '電話號碼為必填',
                      },
                      pattern: {
                        value: /^[0-9]{10}$/g,
                        message: '電話格式不正確',
                      },
                      maxLength: {
                        value: 10,
                        message: '最多不會高於10字元',
                      },
                    })}
                  />
                  {errors.mobileReg && (
                    <div className="b-invalid-feedback">
                      {errors?.mobileReg?.message}
                    </div>
                  )}
                </div>
                <div className="field">
                  <label className="lable1">密碼</label>
                  <input
                    type="password"
                    // id="passwordReg"
                    // name="passwordReg"
                    // onChange={(e) => setPasswordReg(e.target.value)}
                    className={`form-control ${
                      errors.passwordReg && 'is-invalid'
                    }`}
                    placeholder="密碼 至少8字元"
                    {...register('passwordReg', {
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
                  {errors.passwordReg && (
                    <div className="b-invalid-feedback">
                      {errors?.passwordReg?.message}
                    </div>
                  )}
                </div>
                <div className="field">
                  <label className="lable1">生日</label>
                  <input
                    type="date"
                    // id="birthdayReg"
                    // name="birthdayReg"
                    // onChange={(e) => setBirthdayReg(e.target.value)}
                    className={`form-control ${
                      errors.birthday && 'is-invalid'
                    }`}
                    placeholder="請選擇日期"
                    {...register('birthdayReg', { required: true })}
                  />
                  {errors.birthdayReg && (
                    <div className="b-invalid-feedback">生日日期為必填</div>
                  )}
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="註冊" onClick={memberRegister}  />
                  註冊
                </div>
                {/* <div className="signup-link">已有帳號? <Link to="/Loginpage">立即登入</Link></div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Memregister
