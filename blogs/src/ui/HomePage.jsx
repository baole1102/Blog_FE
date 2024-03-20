import React, { useEffect, useState } from 'react'
import '../ui/css/Main.css'
import '../ui/css/Carosel.css'
import Header from './Header'
import Footer from './Footer'
import { getAllBlog, getBlogHighView, getListBlogCurrent } from '../service/BlogService'
import { format } from 'date-fns';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomePage = () => {
  const [blogs, setBlogs] = useState();
  const [blogHighView, setBlogHighView] = useState();
  const [blogCurrent, setBlogCurrent] = useState();

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    getAllBlog().then(res => {
      setBlogs(res)
    })
    getBlogHighView().then(res => {
      setBlogHighView(res)
    })
    getListBlogCurrent().then(res => {
      setBlogCurrent(res);
    })
  }, [])


  if (!blogs) return (
    <div class="main">
      <div class="mario_bin"></div>
      <div class="mario_run">
        <div class="mario_run1"></div>
      </div>
      <div class="walls">
        <div class="wall"></div>
        <div class="wall"></div>
        <div class="wall"></div>
        <div class="wall"></div>
        <div class="wall"></div>
        <div class="wall"></div>
        <div class="wall"></div>
        <div class="wall"></div>
        <div class="wall"></div>
        <div class="wall"></div>
      </div>
      <div class="text"></div>
    </div>
  )

  return (
    <>
      <div>
        <Header />
        {/* start banner Area */}
        <header className="masthead">
          <div className="container">
            <div className="masthead-subheading">Chào mừng bạn tới Blog của tôi!</div>
            <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
          </div>
        </header>
        {/* Blog Noi Bat */}
        <section style={{padding:'50px 0'}} className="category-area" id="news">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 style={{ fontSize: '34px' }} className="mb-2">Blog nổi bật</h1>
                  <p>Blog là nơi tôi chia sẻ những câu chuyện, kinh nghiệm và cảm xúc của mình để kết nối với cộng đồng và lan tỏa sự sáng tạo.</p>
                </div>
              </div>
            </div>
            <Slider {...settings}>
              {
                blogHighView.map(value => (
                  <div>
                    <img style={{ width: '320px', height: '250px' }} src={value.imageBlog} alt="img1" />
                    <p style={{ marginBottom: '5px' }} >{format(new Date(value.createDay), 'dd MMM, yyyy')}</p>
                    <div style={{ width: '300px', textAlign: 'center' }}>
                      <a style={{ fontWeight: '600' }} href="#">{value.title}</a>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
        </section>
        {/* Start travel Area */}
        <section className="travel-area section-gap" id="travel">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 pt-50 col-lg-8">
                <div className="title text-center">
                  <h1 style={{ fontSize: '34px' }} className="mb-2">Danh sách Blog</h1>
                  <p>
                  Blog là một tài nguyên quan trọng cung cấp các bài viết, thông tin và kiến thức đa dạng về một loạt các chủ đề, từ kinh doanh và công nghệ đến cuộc sống hàng ngày và sức khỏe, giúp người đọc mở rộng hiểu biết và tìm kiếm thông tin hữu ích.</p>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-9 ">
                {blogs.map(value => (
                  <div key={value.id} className="single-travel media pb-60">
                    <img className="img-fluid d-flex mr-3 col-3" src={value.imageBlog} alt />
                    <div className="dates ml-20">
                      <span>{format(new Date(value.createDay), 'dd MMM, yyyy')}</span>
                    </div>
                    <div className="media-body align-self-center">
                      <h4 className="mt-0"><Link className='hover--a' to={`/detail/${value.id}`}>{value.title}</Link></h4>
                      <p>{value.content}</p>
                      <div className="meta-bottom d-flex justify-content-between">
                        <p><i class="far fa-eye"></i><span className="lnr lnr-heart ml-10" />{value.viewer} Viewer</p>
                        <p className='div-img'><span className="lnr lnr-bubble">{value.nameUser}</span><img className="image--user ml-5" src={value.imageUser} alt /></p>
                      </div>
                    </div>
                  </div>
                ))
                }
                <a href="#" className="primary-btn load-more pbtn-2 text-uppercase mx-auto mt-60">Load More </a>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Gan Day */}
        <section className="fashion-area section-gap" id="fashion">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-40 col-lg-8">
                <div className="title text-center pt-5">
                  <h1 style={{ fontSize: '34px' }} className="mb-3">Blog gần đây</h1>
                  <p>Blog gần đây không chỉ là nền tảng để chia sẻ kiến thức và trải nghiệm cá nhân, mà còn là một công cụ quan trọng cho giao tiếp và tương tác trực tuyến.</p>
                </div>
              </div>
            </div>
            <div className="row">
              {
                blogCurrent.map(value => (
                  <div className="col-lg-3 col-md-6 single-fashion">
                    <img style={{ height: '176px', width: '255px' }} src={value.imageBlog} alt />
                    <div style={{ margin: "10px 0" }}>
                      <span className="date">{format(new Date(value.createDay), 'dd MMM, yyyy')}</span>
                    </div>
                    <h4><Link style={{ fontSize: '20px' }} className='format-content hover--a' to={`/detail/${value.id}`} >{value.title}</Link></h4>
                    <p className='format-content'>
                      {value.content}
                    </p>
                    <div className="meta-bottom d-flex justify-content-between">
                      <p><i class="far fa-eye"></i><span className="lnr lnr-heart" /> {value.viewer} Viewer</p>
                      <p className='div-img'><span className="lnr lnr-bubble">{value.nameUser}</span><img className="image--user ml-5" src={value.imageUser} alt /></p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default HomePage