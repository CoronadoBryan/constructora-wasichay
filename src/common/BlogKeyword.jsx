import React from 'react';
import { Link } from 'react-router-dom';

const BlogKeyword = () => {
    return (
        <>
            <div className="blog-keyword flx-between gap-2">
                <div className="blog-keyword__content">
                    <span className="blog-keyword__text t text-heading fw-bold">Síguenos en nuestras redes sociales para más información </span>
                    {/* <Link to="#" className="blog-keyword__link">Interiour</Link>
                    <Link to="#" className="blog-keyword__link">Ux design</Link>
                    <Link to="#" className="blog-keyword__link">Graphics</Link> */}
                </div>
                <ul className="social-list style-two mt-0">
                    <li className="social-list__item">
                        <Link to="https://www.facebook.com/people/Constructora-Wasichay/61553256385301/" className="social-list__link flx-center text-facebook"><i className="fab fa-facebook"></i>
                        </Link>
                    </li>
                    <li className="social-list__item">
                        <Link to="https://www.instagram.com/constructora_group_wasichay/" className="social-list__link flx-center text-pinterest"><i className="fab fa-instagram"></i>
                        </Link>
                    </li>
                    <li className="social-list__item">
                        <Link to="https://www.linkedin.com" className="social-list__link flx-center text-linkedin"> <i className="fab fa-linkedin"></i>
                        </Link>
                    </li>
                </ul>
            </div>   
        </>
    );
};

export default BlogKeyword;