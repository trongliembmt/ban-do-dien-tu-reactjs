import React from 'react';
import BreadCrumb from '../components/Restore/BreadCrumb';
import Meta from '../components/Restore/Meta';

const Wishlist = () => {
  return (
    <>
        <Meta title={'Wishlist'} />
        <BreadCrumb title='Wishlist' />
        <div className="wishlist-product-wrapper py-5 home-wrapper-2">
            <div className='container-xxl'>
                <div className='row'>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="wishlist-card-image">
                                <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                            </div>
                            <div className="py-3 px-3">
                                <h5 className="title">Apple Watch Ultra LTE 49mm dây Alpine Size L</h5>
                                <h6 className="price">18.850.000 VNĐ</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="wishlist-card-image">
                                <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                            </div>
                            <div className="py-3 px-3">
                                <h5 className="title">Apple Watch Ultra LTE 49mm dây Alpine Size L</h5>
                                <h6 className="price">18.850.000 VNĐ</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Wishlist