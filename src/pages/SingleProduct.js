import React from 'react'
import ReactStars from "react-rating-stars-component";
import BreadCrumb from '../components/Restore/BreadCrumb';
import Meta from '../components/Restore/Meta';
import Color from '../components/Restore/Color';
import ProductCard from '../components/HomeProduct/ProductCard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
const SingleProduct = () => {
  // const props = {
  //   width: 594,
  //   height: 600,
  //   zoomWidth: 600,
  //   img: "/images/watch.jpg",
  // };
  //đã từng mua sản phẩm thì hiện ra nút đánh giá
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const closeModal = () => {};
  return (
    <>
        <Meta title={'Tên sản phẩm'} />
        <BreadCrumb title='Product Name' />
        <div className='main-product-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                          <div>
                            {/* <ReactImageZoom {...props} /> */}
                            <img src="/images/watch.jpg" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-15">
                          <div>
                            <img src="/images/Red.png" className="img-fluid" alt="" />
                          </div>
                          <div>
                            <img src="/images/Blue.png" className="img-fluid" alt="" />
                          </div>
                          <div>
                            <img src="/images/Midnight.png" className="img-fluid" alt="" />
                          </div>
                          <div>
                            <img src="/images/Starlight.png" className="img-fluid" alt="" />
                          </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                          <div className="border-bottom">
                            <h3 className="title">
                              Apple Watch Ultra LTE 49mm dây Alpine Size L
                            </h3>
                          </div>
                          <div className="border-bottom py-3">
                            <p className="price">18.850.000 VNĐ</p>
                            <div className="d-flex align-items-center gap-10">
                              <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={false}
                                activeColor="#ffd700"
                              />
                              <p className="mb-0 t-review">( 1 lượt đánh giá )</p>
                            </div>
                            {orderedProduct && (
                              <a className="review-btn" href="#review">
                                Đánh giá sản phẩm
                              </a>
                            )}
                          </div>
                          <div className='py-3'>
                            <div className="d-flex gap-10 align-items-center my-2">
                              <h3 className="product-heading">Loại :</h3>
                              <p className="product-data">Đồng hồ thông minh</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                              <h3 className="product-heading">Thương hiệu :</h3>
                              <p className="product-data">Apple</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                              <h3 className="product-heading">Danh mục :</h3>
                              <p className="product-data">Watch</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                              <h3 className="product-heading">Tags :</h3>
                              <p className="product-data">Watch</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                              <h3 className="product-heading">Trạng thái :</h3>
                              <p className="product-data">Còn hàng</p>
                            </div>
                            <div className="d-flex gap-10 flex-column mt-2 mb-3">
                              <h3 className="product-heading">Size :</h3>
                              <div className="d-flex flex-wrap gap-15">
                                <span className="badge border border-1 bg-white text-dark border-secondary">
                                  S
                                </span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">
                                  M
                                </span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">
                                  XL
                                </span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">
                                  XXL
                                </span>
                              </div>
                            </div>
                            <div className="d-flex gap-10 flex-column mt-2 mb-3">
                              <h3 className="product-heading">Màu sắc :</h3>
                              <Color />
                            </div>
                            <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                              <h3 className="product-heading">Số lượng :</h3>
                              <div className="">
                                <input
                                  type="number"
                                  name=""
                                  min={1}
                                  max={10}
                                  className="form-control"
                                  style={{ width: "70px" }}
                                  id=""
                                />
                              </div>
                              <div className="d-flex align-items-center gap-30 ms-5">
                                <button className="button border-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="button">
                                  Thêm vào giỏ hàng
                                </button>
                                <button className="button signup">Mua ngay</button>
                              </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                              <div>
                                <a href="">
                                  <TbGitCompare className="fs-5 me-2" /> Thêm vào danh sách so sánh
                                </a>
                              </div>
                              <div>
                                <a href="">
                                  <AiOutlineHeart className="fs-5 me-2" /> Thêm vào danh sách yêu thích
                                </a>
                              </div>
                            </div>
                            <div className="d-flex gap-10 flex-column  my-3">
                              <h3 className="product-heading">Giao hàng và đổi trả :</h3>
                              <p className="product-data">
                                Freeship cho đơn hàng nhận trực tiếp tại cửa hàng <br /> 
                                Giao hàng trên toàn quốc, có thể thanh toán trực tiếp khi nhận hàng 
                                <b> sau 4-5 ngày đặt hàng!</b>
                              </p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-3">
                              <h3 className="product-heading">Link sản phẩm:</h3>
                              {/* javascript:void(0) khi bấm vào thẻ a sẽ k bị reload lại chuyển trang */}
                              <a
                                href="javascript:void(0);" 
                                onClick={() => {
                                  copyToClipboard(
                                    "https://www.facebook.com/dongngo4501/"
                                  );
                                }}
                              >
                                Sao chép link sản phẩm
                              </a>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='description-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <div className='bg-white p-3'>
                  <h4>Thông số kĩ thuật</h4>
                  <p className=''>
                    Cấu hình Đồng hồ thông minh Apple Watch Ultra LTE 49mm dây Alpine 
                    - Màn hình: OLED <br />
                    - Thời lượng pin: Khoảng 2.5 ngày <br />
                    - Kết nối với hệ điều hành: iPhone 6s trở lên với iOS phiên bản mới nhất <br />
                    - Mặt: Kính Sapphire49 mm <br />
                    - Tính năng cho sức khỏe: Chấm điểm giấc ngủ Cảm biến nhiệt độ Gửi thông báo khi có tai nạn Nhắc nhở nhịp tim cao, thấp Theo dõi chu kì kinh nguyệt Theo dõi giấc ngủ Tính lượng calories tiêu thụ Điện tâm đồ Đo nhịp tim Đo nồng độ oxy (SpO2) Đếm số bước chân
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='reviews-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <h3 id="review">Đánh giá</h3>
                <div className="review-inner-wrapper">
                  <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4 className="mb-2">Tổng đánh giá của người dùng</h4>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">1 lượt đánh giá</p>
                      </div>
                    </div>
                    {orderedProduct && (
                      <div>
                        <a className="text-dark text-decoration-underline" href="">
                          Đánh giá sản phẩm
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="review-form py-4">
                    <h4>Đánh giá sản phẩm</h4>
                    <form action="" className="d-flex flex-column gap-15">
                      <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>
                      <div>
                        <textarea
                          name=""
                          id=""
                          className="w-100 form-control"
                          cols="30"
                          rows="4"
                          placeholder="Comments"
                        ></textarea>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="button border-0">Đánh giá</button>
                      </div>
                    </form>
                  </div>
                  <div className="reviews mt-4">
                    <div className="review">
                      <div className="d-flex gap-10 align-items-center">
                        <h6 className="mb-0">Đông Ngô 69</h6>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                      </div>
                      <p className="mt-3">
                        Tôi là anti fan cứng của Apple, tôi mua chỉ vì bồ tui nó đòi, tôi thực sự rất bất lực với cái hãng này.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='popular-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <h3 className='section-heading'>Sản phẩm bán chạy</h3>
              </div>
            </div>
            <div className='row'>
              {/* <div className='col-2'></div>
              <div className='col-2'></div> */}
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
        <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header py-0 border-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body py-0">
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1 w-50">
                    <img src='/images/watch.jpg' className="img-fluid" alt="product image" />
                  </div>
                  <div className="d-flex flex-column flex-grow-1 w-50">
                    <h6 className="mb-3">Apple Watch</h6>
                    <p className="mb-1">Quantity: asgfd</p>
                    <p className="mb-1">Color: asgfd</p>
                    <p className="mb-1">Size: asgfd</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0 py-0 justify-content-center gap-30">
                <button type="button" className="button" data-bs-dismiss="modal">
                  Xem giỏ hàng
                </button>
                <button type="button" className="button signup">
                  Thanh toán
                </button>
              </div>
              <div className="d-flex justify-content-center py-3">
                <Link
                  className="text-dark"
                  to="/product"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  Continue To Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SingleProduct