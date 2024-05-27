import React from 'react'
import BreadCrumb from '../components/Restore/BreadCrumb';
import Meta from '../components/Restore/Meta';
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
        <Meta title={'Giỏ hàng'} />
        <BreadCrumb title='Cart' />
        <div className='cart-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                            <h4 className="cart-col-1">Sản phẩm</h4>
                            <h4 className="cart-col-2">Giá</h4>
                            <h4 className="cart-col-3">Số lượng</h4>
                            <h4 className="cart-col-4">Tổng tiền</h4>
                        </div>
                        <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                            <div className="cart-col-1 gap-15 d-flex align-items-center">
                                <div className="w-25">
                                <img src='images/watch.jpg' className="img-fluid" alt="product image" />
                                </div>
                                <div className="w-75">
                                    <p>18.850.000 VNĐ</p>
                                    <p>Size: L</p>
                                    <p>Color: Green</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">18.850.000 VNĐ</h5>
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <div>
                                    <input className="form-control" type="number" name="" min={1} max={10} id="" />
                                </div>
                                <div>
                                    <AiFillDelete className="text-danger " />
                                </div>
                            </div>
                            <div className="cart-col-4">
                                <h5 className="price">18.850.000 VNĐ</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 py-2 mt-4'>
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link to="/product" className="button">
                                Tiếp tục mua sắm
                            </Link>
                            <div className="d-flex flex-column align-items-end">
                                <h4>Tổng tiền: 18.850.000 VNĐ</h4>
                                <p>Giá tiền chưa bao gồm phí ship</p>
                                <Link to="/checkout" className="button">
                                Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart