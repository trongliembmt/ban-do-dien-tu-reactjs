import React, { useState } from 'react';
import BreadCrumb from '../components/Restore/BreadCrumb';
import Meta from '../components/Restore/Meta';
import ReactStars from 'react-rating-stars-component'
import ProductCard from '../components/HomeProduct/ProductCard'
const OurStore = () => {
    const [grid, setGrid] = useState(3);
  return (
    <>
        <Meta title={'Sản phẩm'} />
        <BreadCrumb title='Our store' />
        <div className="store-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Danh mục sản phẩm</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Di động</li>
                                    <li>Laptop</li>
                                    <li>Tablet</li>
                                    <li>Phụ kiện</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Lọc sản phẩm</h3>
                            <div>
                                <h5 className='sub-title'>Theo trạng thái</h5>
                                <div>
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="" />
                                    <label className="form-check-label" htmlFor="">
                                        In Stock (69)
                                    </label>
                                    </div>
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="" />
                                    <label className="form-check-label" htmlFor="">
                                        Out of Stock (0)
                                    </label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Theo giá</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="Từ" />
                                        <label htmlFor="floatingInput">Từ</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput1" placeholder="Đến" />
                                        <label htmlFor="floatingInput1">Đến</label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Màu sắc</h5>
                                <div>
                                    <ul className='colors ps-0'>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h5 className='sub-title'>Size</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-1" />
                                        <label className="form-check-label" htmlFor="color-1">
                                            S (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-2" />
                                        <label className="form-check-label" htmlFor="color-2">
                                            M (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-3" />
                                        <label className="form-check-label" htmlFor="color-3">
                                            L (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-4" />
                                        <label className="form-check-label" htmlFor="color-4">
                                            XL (2)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Tag sản phẩm</h3>
                            <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-2">Headphone</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-2">Laptop</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-2">Di động</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-2">Iphone</span>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Đề xuất</h3>
                            <div>
                                <div className="random-product d-flex mb-3">
                                    <div className="w-25">
                                        <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                                    </div>
                                    <div className="w-75 ms-3">
                                        <h5>Apple Watch Ultra LTE 49mm dây Alpine Size L</h5>
                                        <ReactStars
                                            count={5}
                                            size={15}
                                            value= {3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p>18.850.000 VNĐ</p>
                                    </div>
                                </div>
                                <div className="random-product d-flex mb-3">
                                    <div className="w-25">
                                        <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                                    </div>
                                    <div className="w-75 ms-3">
                                        <h5>Apple Watch Ultra LTE 49mm dây Alpine Size L</h5>
                                        <ReactStars
                                            count={5}
                                            size={15}
                                            value= {3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p>18.850.000 VNĐ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='filter-sort-grid mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0 d-block' style={{width: "100px"}}>Sắp xếp:</p>
                                    <select name="" className='form-control form-select' id="">
                                        <option value="manual">Nổi bật</option>
                                        <option value="best-selling" selected="selected">Bán chạy</option>
                                        <option value="title-ascending">Từ A-Z</option>
                                        <option value="title-descending">Từ Z-A</option>
                                        <option value="price-ascending">Giá từ thấp đến cao</option>
                                        <option value="price-descending">Giá từ cao đến thấp</option>
                                        <option value="created-ascending">Mới nhất</option>
                                        <option value="created-descending">Cũ nhất</option>
                                    </select>
                                </div>
                                <div className='d-flex  align-items-center gap-10'>
                                    <p className='total-product mb-0'>69 Sản Phẩm</p>
                                    <div className='d-flex gap-10 align-items-center grid'>
                                        <img onClick={ () => {setGrid(3)}} 
                                            src="images/gr4.svg" className='d-block img-fluid' alt='grid' />
                                        <img onClick={ () => {setGrid(4)}} 
                                            src="images/gr3.svg" className='d-block img-fluid' alt='grid' />
                                        <img onClick={ () => {setGrid(6)}} 
                                             src="images/gr2.svg" className='d-block img-fluid' alt='grid' />
                                        <img onClick={ () => {setGrid(12)}}  
                                        src="images/gr.svg" className='d-block img-fluid' alt='grid' />
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className='product-list pb-5'>
                            <div className='d-flex flex-wrap gap-10'>
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurStore