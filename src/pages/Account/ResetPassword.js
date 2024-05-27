import React from 'react'
import Meta from '../../components/Restore/Meta';
import BreadCrumb from '../../components/Restore/BreadCrumb';
const ResetPassword = () =>{
  return (
    <>
        <Meta title={'Đặt lại mật khẩu'} />
        <BreadCrumb title='Reset-Password' />
        <div className='forgotpassword-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Đặt lại mật khẩu</h3>
                        <form action="" className="d-flex flex-column gap-15">
                            <input type="password" name="password" placeholder="Mật khẩu mới" className='form-control' />
                            <input type="password" name="confpassword" placeholder="Xác nhận lại mật khẩu" className='form-control' />
                            <div>
                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button className="button border-0">Xác nhận</button>
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

export default ResetPassword