import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from "../components/Restore/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Restore/Meta";

const SingleBlog = () =>{
  return (
    <>
        <Meta title={'Tên Blog'} />
        <BreadCrumb title='Blog Name' />
        <div className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to="/blog" className="d-flex align-items-center gap-10">
                                <HiOutlineArrowLeft className="fs-4" /> Quay lại
                            </Link>
                            <h3 className="title">Iphone 14 ra mắt vào ngày 25/9/2022</h3>
                            <img src="/images/blog-1.jpg" className="img-fluid w-100 my-4" alt="blog"/>
                            <p>
                                Youre only as good as your last collection, which is an
                                enormous pressure. I think there is something about luxury 
                                its not something people need, but its what they want. It
                                really pulls at their heart. I have a fantastic relationship
                                with money.Scelerisque sociosqu ullamcorper urna nisl mollis
                                vestibulum pretium commodo inceptos cum condimentum placerat
                                diam venenatis blandit hac eget dis lacus a parturient a
                                accumsan nisl ante vestibulum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlog