import React from 'react'
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Checkout = () => {
  return (
    <>
        <div className="checkout-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-7">
                     <div className="checkout-left-data">
                        <h3 className="website-name">NQD Store</h3>
                            {/* breadcrumb tự tạo đường dẫn của bootstrap */}
                            <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link className="text-dark total-price" to="/cart">
                                    Cart
                                    </Link>
                                </li>
                                &nbsp; /&nbsp;
                                <li
                                    className="breadcrumb-ite total-price active"
                                    aria-current="page"
                                >
                                    Information
                                </li>
                                &nbsp; /
                                <li className="breadcrumb-item total-price active">
                                    Shipping
                                </li>
                                &nbsp; /
                                <li
                                    className="breadcrumb-item total-price active"
                                    aria-current="page"
                                >
                                    Payment
                                </li>
                                </ol>
                            </nav>
                            <h4 className="title total">Thông tin liên lạc</h4>
                            <p className="user-details total">
                                Đông Ngô 69 (69conheocon@gmail.com)
                            </p>
                            <h4 className="mb-3">Địa chỉ giao hàng</h4>
                            <form action="" className="d-flex gap-15 flex-wrap justify-content-between">
                                <div className="w-100">
                                <select name="" className="form-control form-select" id="">
                                    <option value="" selected disabled>Thành phố</option>
                                </select>
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder="Họ và tên" className="form-control"/>
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder="Địa chỉ" className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Phường / Xã" className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Quận / Huyện" className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Thành phố" className="form-control" />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/cart" className="text-dark">
                                        <BiArrowBack className="me-2" />
                                        Quay lại giỏ hàng
                                        </Link>
                                        <Link to="/cart" className="button">
                                        Xác nhận đơn hàng
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-bottom py-4">
                            <div className="d-flex gap-10 mb-2 align-align-items-center">
                                <div className="w-75 d-flex gap-10">
                                    <div className="w-25 position-relative">
                                        <span
                                        style={{ top: "-10px", right: "2px" }}
                                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                                        >
                                        1
                                        </span>
                                        <img className="img-fluid" src='/images/watch.jpg' alt="product" />
                                    </div>
                                    <div>
                                        <h5 className="total-price">Apple Watch Ultra LTE 49mm dây Alpine Size L</h5>
                                        <p className="total-price">L / Green</p>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                <h5 className="total">18.850.000 VNĐ</h5>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom py-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="total">Thành tiền</p>
                                <p className="total-price">18.850.000 VNĐ</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 total">Phí ship</p>
                                <p className="mb-0 total-price">50.000 VNĐ</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bootom py-4">
                            <h4 className="total">Total</h4>
                            <h5 className="total-price">19.000.000 VNĐ</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout