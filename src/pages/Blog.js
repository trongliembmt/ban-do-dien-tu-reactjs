import React from 'react'
import BreadCrumb from '../components/Restore/BreadCrumb';
import Meta from '../components/Restore/Meta';
import BlogCard from '../components/HomeProduct/BlogCard';

const Blog = () => {
  return(
  <>
    <Meta title={'Blog công nghệ'} />
    <BreadCrumb title='Blog' />
    <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Danh mục bài viết</h3>
                        <div>
                            <ul className='ps-0'>
                                <li>Di động</li>
                                <li>Laptop</li>
                                <li>Tablet</li>
                                <li>Phụ kiện</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-9'>
                    <div className='row'>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default Blog