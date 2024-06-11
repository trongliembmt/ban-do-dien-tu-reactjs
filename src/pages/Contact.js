import React from 'react'
import BreadCrumb from '../components/Restore/BreadCrumb';
import Meta from '../components/Restore/Meta';
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta title={'Liên hệ'} />
      <BreadCrumb title='Contact' />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1045.8353123489371!2d106.73513297257206!3d10.723607702545925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ca5922aef7%3A0xb1772b41eadc9af6!2zQ2h1eeG7g24gcGjDoXQgbmhhbmggREhMIFF14bqtbiA3IC1ESEwgUXXhuq1uIDcgVFBIQ00!5e0!3m2!1svi!2s!4v1685521104369!5m2!1svi!2s" 
                  className="border-0 w-100" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className='col-12 mt-5'>
                <div className="contact-inner-wrapper d-flex justify-content-between ">
                  <div>
                    <h3 className="contact-title mb-4">Contact</h3>
                    <form action="" className="d-flex flex-column gap-15">
                      <div>
                        <input type="text" className="form-control" placeholder="Họ tên" />
                      </div>
                      <div>
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                      <div>
                        <input type="tel" className="form-control" placeholder="Số điện thoại" />
                      </div>
                      <div>
                        <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="Nội dung"></textarea>
                      </div>
                      <div>
                        <button className="button border-0">Gửi</button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h3 className="contact-title mb-4">Liên lạc ngay với chúng tôi</h3>
                    <div>
                      <ul className="ps-0">
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <AiOutlineHome className="fs-5" />
                          <address className="mb-0">
                            1646A Võ Văn Kiệt,Phường 16, Q8, Tp.Hồ Chí Minh
                          </address>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <BiPhoneCall className="fs-5" />
                          <a href="tel:+83 0909963300">+84 090996xxxx</a>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <AiOutlineMail className="fs-5" />
                          <a href="mailto:69conheocon@gmail.com">
                            69conheocon@gmail.com
                          </a>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <BiInfoCircle className="fs-5" />
                          <p className="mb-0">Monday – Friday 10 AM – 8 PM</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
      </div>
    </>
  )
}

export default Contact