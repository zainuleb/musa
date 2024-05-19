import React from 'react'

const Hero = () => {
  return (
    <div>
<div className="">
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <h2 className="sec-title has-line">Trending News</h2>
                </div>
                <div className="col-auto">
                    <div className="sec-btn">
                        <div className="icon-box">
                            <button data-slick-prev="#blog-slide1" className="slick-arrow default"><i className="far fa-arrow-left"></i></button>
                            <button data-slick-next="#blog-slide1" className="slick-arrow default"><i className="far fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row th-carousel" id="blog-slide1" data-slide-show="4" data-lg-slide-show="3" data-md-slide-show="2" data-sm-slide-show="2">
                <div className="col-sm-6 col-xl-4">
                    <div className="blog-style1">
                        <div className="blog-img">
                            <img src="assets/img/blog/blog_1_1.jpg" alt="blog image"/>
                            <a data-theme-color="#00D084" href="blog.html" className="category">Lifestyle</a>
                        </div>
                        <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Balance harmony and joy in Every lifestyle.</a></h3>
                        <div className="blog-meta">
                            <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                            <a href="blog.html"><i className="fal fa-calendar-days"></i>27 Mar, 2023</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <div className="blog-style1">
                        <div className="blog-img">
                            <img src="assets/img/blog/blog_1_2.jpg" alt="blog image"/>
                            <a data-theme-color="#FF9500" href="blog.html" className="category">Politics</a>
                        </div>
                        <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Power to the people for a Better future!</a></h3>
                        <div className="blog-meta">
                            <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                            <a href="blog.html"><i className="fal fa-calendar-days"></i>30 Mar, 2023</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <div className="blog-style1">
                        <div className="blog-img">
                            <img src="assets/img/blog/blog_1_3.jpg" alt="blog image"/>
                            <a data-theme-color="#E7473C" href="blog.html" className="category">Fitness</a>
                        </div>
                        <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Fitness the key to vitality and Well-being.</a></h3>
                        <div className="blog-meta">
                            <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                            <a href="blog.html"><i className="fal fa-calendar-days"></i>24 Mar, 2023</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <div className="blog-style1">
                        <div className="blog-img">
                            <img src="assets/img/blog/blog_1_4.jpg" alt="blog image"/>
                            <a data-theme-color="#00D084" href="blog.html" className="category">Health</a>
                        </div>
                        <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Embrace bump and Victory volleyball style.</a></h3>
                        <div className="blog-meta">
                            <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                            <a href="blog.html"><i className="fal fa-calendar-days"></i>26 Mar, 2023</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <div className="blog-style1">
                        <div className="blog-img">
                            <img src="assets/img/blog/blog_1_5.jpg" alt="blog image"/>
                            <a data-theme-color="#FF9500" href="blog.html" className="category">Politics</a>
                        </div>
                        <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Leadership for the People By the people</a></h3>
                        <div className="blog-meta">
                            <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                            <a href="blog.html"><i className="fal fa-calendar-days"></i>22 Mar, 2023</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
