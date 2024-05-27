import React from "react"
import { Link } from "react-router-dom"

const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="blog-card-img">
                <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog"/>
            </div>
            <div className="blog-card-content">
                <p className="date">1 Dec, 2022</p>
                <h5 className="title">Iphone 14 ra mắt vào ngày 25/9/2022</h5>
                <p className="desc">Đừng có mua làm ơn vừa mắc, vừa lỗi vừa không bền, vừa bị Apple hút máu</p>
                <Link to='/blog/:id' className="button">Xem thêm</Link>
            </div>
        </div>
            
    )
}

export default BlogCard