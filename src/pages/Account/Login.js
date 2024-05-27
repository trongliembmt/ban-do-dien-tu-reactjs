import React from 'react'
import BreadCrumb from '../../components/Restore/BreadCrumb';
import Meta from '../../components/Restore/Meta';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
        <Meta title={'Đăng nhập'} />
        <BreadCrumb title='Login' />
        <div className='login-wrapper home-wrapper-2 py-5'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className='auth-card'>
                            <h3 className="text-center mb-3">Đăng nhập tài khoản</h3>
                            <form action='' className="d-flex flex-column gap-15">
                                <div>
                                    <input type='email' name='email' placeholder='Nhập email' className='form-control' />
                                </div>
                                <div>
                                    <input type='password' name='password' placeholder='Nhập mật khẩu' className='form-control' />
                                </div>
                                <div>
                                    <Link to='/forgot-password'>Quên mật khẩu?</Link>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0" type="submit">
                                        Đăng nhập
                                        </button>
                                        <Link to="/reigister" className="button signup">
                                        Đăng ký
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login