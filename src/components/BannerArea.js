import React from "react";

const BannerArea = () => {
  return (
    <section className="space">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="row gy-4">
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style1">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_1_5.jpg" alt="blog" />
                    <a
                      data-theme-color="#FF9500"
                      href="blog.html"
                      className="category"
                    >
                      Politics
                    </a>
                  </div>
                  <h3 className="box-title-22">
                    <a className="hover-line" href="blog-details.html">
                      Leadership for the People By the people
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user"></i>By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days"></i>28 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style1">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_1_6.jpg" alt="blog" />
                    <a
                      data-theme-color="#4E4BD0"
                      href="blog.html"
                      className="category"
                    >
                      Sports
                    </a>
                  </div>
                  <h3 className="box-title-22">
                    <a className="hover-line" href="blog-details.html">
                      Game on! Stay ahead withn Sports updates
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user"></i>By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days"></i>20 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 mt-4 mt-xl-0">
            <div className="">
              <div className="blog-style1 style-big">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_2_1.jpg" alt="blog" />
                  <a
                    data-theme-color="#FF9500"
                    href="blog.html"
                    className="category"
                  >
                    Politics
                  </a>
                </div>
                <h3 className="box-title-30">
                  <a className="hover-line" href="blog-details.html">
                    Following the Moon, they are in Close space. choose the best
                  </a>
                </h3>
                <div className="blog-meta">
                  <a href="author.html">
                    <i className="far fa-user"></i>By - Tnews
                  </a>
                  <a href="blog.html">
                    <i className="fal fa-calendar-days"></i>25 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 mt-35 mt-xl-0">
            <div className="nav tab-menu indicator-active" role="tablist">
              <button
                className="tab-btn active"
                id="nav-one-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-one"
                type="button"
                role="tab"
                aria-controls="nav-one"
                aria-selected="true"
              >
                Top News
              </button>
              <button
                className="tab-btn"
                id="nav-two-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-two"
                type="button"
                role="tab"
                aria-controls="nav-two"
                aria-selected="false"
              >
                Recent News
              </button>
            </div>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="nav-one"
                role="tabpanel"
                aria-labelledby="nav-one-tab"
              >
                <div className="row gy-4">
                  <div className="col-xl-12 col-md-6 border-blog">
                    <div className="blog-style2">
                      <div className="blog-img">
                        <img src="assets/img/blog/blog_3_1.jpg" alt="blog" />
                      </div>
                      <div className="blog-content">
                        <a
                          data-theme-color="#FF9500"
                          href="blog.html"
                          className="category"
                        >
                          Politics
                        </a>
                        <h3 className="box-title-18">
                          <a className="hover-line" href="blog-details.html">
                            Stay informed, Navigate the world
                          </a>
                        </h3>
                        <div className="blog-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-days"></i>14 Mar, 2023
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 col-md-6 border-blog">
                    <div className="blog-style2">
                      <div className="blog-img">
                        <img src="assets/img/blog/blog_3_2.jpg" alt="blog" />
                      </div>
                      <div className="blog-content">
                        <a
                          data-theme-color="#007BFF"
                          href="blog.html"
                          className="category"
                        >
                          Travel
                        </a>
                        <h3 className="box-title-18">
                          <a className="hover-line" href="blog-details.html">
                            Your beach resort Sanctuary.
                          </a>
                        </h3>
                        <div className="blog-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-days"></i>22 Mar, 2023
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 col-md-6 border-blog">
                    <div className="blog-style2">
                      <div className="blog-img">
                        <img src="assets/img/blog/blog_3_3.jpg" alt="blog" />
                      </div>
                      <div className="blog-content">
                        <a
                          data-theme-color="#00D084"
                          href="blog.html"
                          className="category"
                        >
                          Life Style
                        </a>
                        <h3 className="box-title-18">
                          <a className="hover-line" href="blog-details.html">
                            Style your life news For modern living
                          </a>
                        </h3>
                        <div className="blog-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-days"></i>30 Mar, 2023
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 col-md-6 border-blog">
                    <div className="blog-style2">
                      <div className="blog-img">
                        <img src="assets/img/blog/blog_3_4.jpg" alt="blog" />
                      </div>
                      <div className="blog-content">
                        <a
                          data-theme-color="#4E4BD0"
                          href="blog.html"
                          className="category"
                        >
                          Sports
                        </a>
                        <h3 className="box-title-18">
                          <a className="hover-line" href="blog-details.html">
                            Score big with the Latest sports news.
                          </a>
                        </h3>
                        <div className="blog-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-days"></i>11 Mar, 2023
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-two"
                role="tabpanel"
                aria-labelledby="nav-two-tab"
              >
                <div className="row gy-4">
                  <div className="col-xl-12 col-md-6 border-blog">
                    <div className="blog-style2">
                      <div className="blog-img">
                        <img src="assets/img/blog/blog_3_3.jpg" alt="blog" />
                      </div>
                      <div className="blog-content">
                        <a
                          data-theme-color="#00D084"
                          href="blog.html"
                          className="category"
                        >
                          Life Style
                        </a>
                        <h3 className="box-title-18">
                          <a className="hover-line" href="blog-details.html">
                            Style your life news For modern living
                          </a>
                        </h3>
                        <div className="blog-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-days"></i>16 Mar, 2023
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 col-md-6 border-blog">
                    <div className="blog-style2">
                      <div className="blog-img">
                        <img src="assets/img/blog/blog_3_4.jpg" alt="blog" />
                      </div>
                      <div className="blog-content">
                        <a
                          data-theme-color="#4E4BD0"
                          href="blog.html"
                          className="category"
                        >
                          Sports
                        </a>
                        <h3 className="box-title-18">
                          <a className="hover-line" href="blog-details.html">
                            Score big with the Latest sports news.
                          </a>
                        </h3>
                        <div className="blog-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-days"></i>26 Mar, 2023
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 col-md-6 border-blog">
                    <div className="blog-style2">
                      <div className="blog-img">
                        <img src="assets/img/blog/blog_3_5.jpg" alt="blog" />
                      </div>
                      <div className="blog-content">
                        <a
                          data-theme-color="#868101"
                          href="blog.html"
                          className="category"
                        >
                          Action
                        </a>
                        <h3 className="box-title-18">
                          <a className="hover-line" href="blog-details.html">
                            Adventure awaits, seize the moment
                          </a>
                        </h3>
                        <div className="blog-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-days"></i>11 Mar, 2023
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 col-md-6 border-blog">
                    <div className="blog-style2">
                      <div className="blog-img">
                        <img src="assets/img/blog/blog_3_6.jpg" alt="blog" />
                      </div>
                      <div className="blog-content">
                        <a
                          data-theme-color="#868101"
                          href="blog.html"
                          className="category"
                        >
                          Thriller
                        </a>
                        <h3 className="box-title-18">
                          <a className="hover-line" href="blog-details.html">
                            brace yourself for thrilling adventure.
                          </a>
                        </h3>
                        <div className="blog-meta">
                          <a href="blog.html">
                            <i className="fal fa-calendar-days"></i>22 Mar, 2023
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerArea;
