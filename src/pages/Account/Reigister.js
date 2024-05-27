import React from 'react'
import BreadCrumb from '../../components/Restore/BreadCrumb';
import Meta from '../../components/Restore/Meta';
import { Link } from 'react-router-dom'
const Reigister = () => {
  return (
    <>
        <Meta title={'Đăng ký'} />
        <BreadCrumb title='Reigister' />
        <div className='reigister-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Đăng ký tài khoản</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <input type="text" name="name" placeholder="Nhập họ và tên" className='form-control' />
                                <input type="email" name="email" placeholder="Nhập Email" className='form-control' />
                                <input type="tel" name="mobile" placeholder="Nhập số điện thoại" className='form-control' />
                                <input type="password" name="password" placeholder="Nhập mật khẩu" className='form-control'/>
                                <div>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0">Đăng ký</button>
                                        <Link to="/login" className="button signup">Đăng nhập</Link>
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

export default Reigister