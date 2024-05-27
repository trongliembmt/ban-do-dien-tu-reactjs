import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {Link} from 'react-router-dom'
const SpecialProduct = () => {
  return (
    <div className='col-4'>
        <div className='special-product-cart'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                </div>
                <div className='special-product-content'>
                    <h5 className='brand'>Apple</h5>
                    <h6 className='title'>Apple Watch Ultra LTE 49mm dây Alpine Size L</h6>
                    <ReactStars
                        count={5}
                        size={20}
                        value= {3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className='price'>
                        <span className='text-danger'>18.850.000 VNĐ</span> <br></br> <strike>20.850.000 VNĐ</strike>
                    </p>
                    <div className='discount-till d-flex align-items-center gap-10'>
                        <p className='mb-0'>
                            <b>5 </b>days
                        </p>
                        <div className='d-flex gap-10 align-items-center'>
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                            <span className='badge rounded-circle p-3 bg-danger'>15</span>:
                            <span className='badge rounded-circle p-3 bg-danger'>23</span>
                        </div>
                    </div>
                    <div className='prod-count my-3'>
                        <p>Số lượng: 69</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    
                    <Link className='button'>Thêm vào giỏ hàng</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct