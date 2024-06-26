import React from "react";
import CommonSidebar from "../common/CommonSidebar";

import { Link, useLocation } from "react-router-dom";
import CommentForm from "../common/CommentForm";
import Comment from "../common/Comment";
import BlogKeyword from "../common/BlogKeyword";
import BlogShowcase from "../common/BlogShowcase";
import BlogTesti from "../common/BlogTesti";
import BlogNextPrev from "../common/BlogNextPrev";

const BlogDetailsSection = () => {
  const location = useLocation();

  // get Current Formatted Date
  const currentDate = new Date();
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <div className="blog-details-section padding-y-120">
      <div className="container container-two">
        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="blog-details">
              <div className="blog-details__thumb">
                <img src={location.state.thumb} alt=""  className="cover-img" />
                <span className="blog-details__date">{formattedDate}</span>
              </div>
              <div className="blog-details__content">
                <ul className="blog-infos">
                  <li className="blog-infos__item">{location.state.admin}</li>

                  {/* <li className="blog-infos__item">
                                        <Link to="#" className="blog-infos__link"> 
                                            <span className="icon"><i className="fas fa-comment-alt"></i> </span>
                                            Webs Design
                                        </Link>
                                    </li>
                                    <li className="blog-infos__item">
                                        <Link to="#" className="blog-infos__link"> 
                                            <span className="icon"> <i className="fas fa-comments"></i></span>
                                            Comments (05)
                                        </Link>
                                    </li> */}
                </ul>
                <h5 className="blog-details__title">{location.state.title}</h5>
                {/* <p className="blog-details__desc">{location.state.desc_general}</p> */}
                <p className="blog-details__desc">
                  {location.state.desc.slice(0, 5000)}
                </p>
              </div>
              <br />

              <div className="blog-showcase">
                <h5 className="blog-showcase__title">
                  Explora el mundo de la topografía
                </h5>
                <p className="blog-showcase__desc">
                  La topografía es el arte y la ciencia de medir terrenos para
                  determinar sus características físicas. Es fundamental en la
                  planificación y ejecución de proyectos de ingeniería y
                  construcción.
                </p>
                <div className="blog-showcase__content flx-align gap-4">
                  <div className="blog-showcase__thumb"></div>
                  <ul className="check-list">
                    <li className="check-list__item d-flex align-items-center">
                      <span className="icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="text">Medición precisa del terreno</span>
                    </li>
                    <li className="check-list__item d-flex align-items-center">
                      <span className="icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="text">Análisis detallado del suelo</span>
                    </li>
                    <li className="check-list__item d-flex align-items-center">
                      <span className="icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="text">
                        Planificación de proyectos de construcción
                      </span>
                    </li>
                    <li className="check-list__item d-flex align-items-center">
                      <span className="icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="text">
                        Gestión de recursos naturales
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="blog-showcase__desc">
                  La topografía juega un papel crucial en la gestión de recursos
                  naturales, el desarrollo urbano y rural, y en la conservación
                  del medio ambiente, proporcionando datos esenciales para la
                  toma de decisiones.
                </p>
              </div>

              {/* Blog ShowCase Start */}
              {/* <BlogShowcase /> */}
              {/* Blog ShowCase End */}

              {/* Blog Next Prev Start */}
              <BlogNextPrev />
              {/* Blog Next Prev End */}

              {/* Blog Keyword Start */}
              <BlogKeyword/>
              {/* Blog Keyword End */}

              {/* Comment Start */}
              {/* <Comment/> */}
              {/* Comment End */}

             
              {/* <CommentForm/> */}
            </div>
          </div>
          <div className="col-lg-4">
            <CommonSidebar
              renderSearch={true}
              renderProperties={false}
              renderTags={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsSection;
