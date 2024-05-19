import React from "react";

const NewsArea = () => {
  return (
    <div>
      <div className="container">
        <div className="news-area">
          <div className="title">Breaking News :</div>
          <div className="news-wrap">
            <div className="row slick-marquee">
              <div className="col-auto">
                <a href="blog-details.html" className="breaking-news">
                  Relaxation redefined, your beach resort sanctuary.
                </a>
              </div>
              <div className="col-auto">
                <a href="blog-details.html" className="breaking-news">
                  From health to fashion, lifestyle news curated.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArea;
