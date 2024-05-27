import React from 'react'
import BreadCrumb from '../../components/Restore/BreadCrumb';
import Meta from '../../components/Restore/Meta';
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
  return (
    <>
        <Meta title={'Lấy lại mật khẩu'} />
        <BreadCrumb title='Forgot-Password' />
        <div className='forgotpassword-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Lấy lại mật khẩu</h3>
                            <p className="text-center mt-2 mb-3">
                                Chúng tôi sẽ gửi mail xác nhận đến địa chỉ mail của bạn
                            </p>
                            <form action="" className="d-flex flex-column gap-15">
                                <input type="email" name="email" placeholder="Nhập email" className='form-control' />
                                <div>
                                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                                        <button className="button border-0" type="submit">
                                        Xác nhận
                                        </button>
                                        <Link to="/login">Trở về</Link>
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

export default ForgotPassword