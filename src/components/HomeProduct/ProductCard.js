import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {Link, useLocation} from 'react-router-dom'
const ProductCard = (props) => {
  const { grid } =  props
  let location = useLocation();

  return (
    <>
      <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-2"}`}>
        {/* nếu ở / thì them link product/id, nếu ở product/id thì vẫn lấy link product/id, nếu ở product thì thêm id */}
        <Link to={`${location.pathname == "/" ? "/product/:id" : location.pathname == "/product/:id" ? "/product/:id" : ":id" }`}
           className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
              <Link>
                <img src="/images/wish.svg" alt="wishlist" />
              </Link>
            </div>
            <div className='product-image'>
              <img src="/images/watch.jpg" className='img-fluid' alt="product image" />
              <img src="/images/watch1.jpg" className='img-fluid' alt="product image" />
            </div>
            <div className='product-details'>
              <h6 className='brand'>Apple</h6>
              <h5 className='product-title'>Apple Watch Ultra LTE 49mm dây Alpine Size L</h5>
              <ReactStars
                count={5}
                size={20}
                value= {3}
                edit={false}
                activeColor="#ffd700"
              />
              <p className={`product-description ${grid === 12 ? "d-block" : "d-none"}`}>Màn hình Retina Luôn Bật lớn nhất, sáng nhất có thể đọc được trong điều kiện khắc nghiệt nhất</p>
              <p className='product-price'>18.850.000 VNĐ</p>
            </div>
            <div className='action-bar position-absolute'>
              <div className='d-flex flex-column'>
                <Link>
                  <img src="/images/prodcompare.svg" alt="compare" />
                </Link>
                <Link>
                  <img src="/images/view.svg" alt="view" />
                </Link>
                <Link>
                  <img src="/images/add-cart.svg" alt="addcart" />
                </Link>
              </div>
            </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard